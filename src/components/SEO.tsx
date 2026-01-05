import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: "website" | "article";
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
  };
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
}

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "/og-image.png",
  ogType = "website",
  article,
  breadcrumbs,
  faq,
}: SEOProps) => {
  const fullTitle = `${title} | StyleGenius`;
  const fullCanonicalUrl = `https://stylegenius.app${canonicalUrl}`;
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${BLOG_IMAGE_BASE}${ogImage}`;

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "StyleGenius",
    url: "https://stylegenius.app",
    logo: "https://stylegenius.app/logo.png",
    sameAs: [
      "https://www.instagram.com/stylegenius.app",
      "https://www.tiktok.com/@stylegenius.app"
    ],
    description: "StyleGenius helps you discover your best colors, try on clothes virtually, and track prices across all your favorite stores."
  };

  // Article/BlogPosting Schema
  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: fullOgImage,
    author: {
      "@type": "Organization",
      name: "StyleGenius",
      url: "https://stylegenius.app"
    },
    publisher: {
      "@type": "Organization",
      name: "StyleGenius",
      logo: {
        "@type": "ImageObject",
        url: "https://stylegenius.app/logo.png"
      }
    },
    datePublished: article.publishedTime || "2024-12-01",
    dateModified: article.modifiedTime || article.publishedTime || "2024-12-01",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": fullCanonicalUrl
    },
    articleSection: article.section,
    keywords: article.tags?.join(", ")
  } : null;

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://stylegenius.app${item.url}`
    }))
  } : null;

  // FAQ Schema
  const faqSchema = faq && faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="StyleGenius" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Article specific meta */}
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {article?.section && (
        <meta property="article:section" content={article.section} />
      )}
      {article?.tags?.map((tag) => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
