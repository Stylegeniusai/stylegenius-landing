import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnalysisCTA from "../components/AnalysisCTA";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const colorHexMap: Record<string, string> = {
  // Spring best
  "Coral": "#FF7F50",
  "Peach": "#FFCBA4",
  "Warm pink": "#FF69B4",
  "Golden yellow": "#FFD700",
  "Turquoise": "#40E0D0",
  "Warm green": "#7BA05B",
  "Ivory": "#FFFFF0",
  // Summer best
  "Dusty rose": "#DCAE96",
  "Soft blue": "#7EC8E3",
  "Lavender": "#C4A1D0",
  "Mauve": "#B47EB3",
  "Sage green": "#B2AC88",
  "Powder pink": "#F4C2C2",
  "Soft white": "#F5F5F0",
  // Autumn best
  "Burnt orange": "#CC5500",
  "Mustard": "#E1AD01",
  "Olive green": "#808000",
  "Rust": "#B7410E",
  "Chocolate brown": "#7B3F00",
  "Teal": "#008080",
  "Warm red": "#CD4A3F",
  // Winter best
  "True red": "#E10000",
  "Emerald": "#50C878",
  "Royal blue": "#4169E1",
  "Hot pink": "#FF69B4",
  "Pure white": "#FFFFFF",
  "Black": "#000000",
  "Icy purple": "#C8A2C8",
  // Avoid colors
  "Dark navy": "#000080",
  "Burgundy": "#800020",
  "Cool gray": "#8C92AC",
  "Orange": "#FF8C00",
  "Bright yellow": "#FFEF00",
  "Warm brown": "#964B00",
  "Bright pink": "#FF007F",
  "Cool purple": "#7B68EE",
  "Icy blue": "#A5F2F3",
  "Silver": "#C0C0C0",
  "Muted earth tones": "#9B7653",
  "Warm beige": "#D2B48C",
};

const seasonQuizQuestions = [
  {
    question: "What's your natural hair color?",
    options: [
      { label: "Golden blonde, strawberry blonde, or light brown with warm highlights", scores: { spring: 2, autumn: 1 } },
      { label: "Ash blonde, ash brown, or soft brown without warm tones", scores: { summer: 2 } },
      { label: "Auburn, chestnut, copper, or dark golden brown", scores: { autumn: 2, spring: 1 } },
      { label: "Dark brown, black, or platinum — high contrast with my skin", scores: { winter: 2 } },
    ],
  },
  {
    question: "What color are your eyes?",
    options: [
      { label: "Light blue, green, or light hazel with golden flecks", scores: { spring: 2 } },
      { label: "Soft blue, gray, gray-green, or muted hazel", scores: { summer: 2 } },
      { label: "Warm brown, hazel, green, or amber", scores: { autumn: 2 } },
      { label: "Dark brown, black, or striking bright blue/green", scores: { winter: 2 } },
    ],
  },
  {
    question: "Look at the veins on your wrist. What color are they?",
    options: [
      { label: "Green or olive", scores: { spring: 1, autumn: 2 } },
      { label: "Blue or purple", scores: { summer: 1, winter: 2 } },
      { label: "A mix of blue and green", scores: { summer: 1, autumn: 1 } },
    ],
  },
  {
    question: "Which jewelry looks better on you?",
    options: [
      { label: "Gold — it makes my skin glow", scores: { spring: 1, autumn: 2 } },
      { label: "Silver — it looks cleaner and brighter on me", scores: { summer: 1, winter: 2 } },
      { label: "Both work equally well", scores: { summer: 1, autumn: 1 } },
    ],
  },
  {
    question: "How would you describe the contrast between your hair, skin, and eyes?",
    options: [
      { label: "Light and fresh — everything is fairly light and warm", scores: { spring: 2 } },
      { label: "Soft and muted — low contrast, nothing stands out dramatically", scores: { summer: 2 } },
      { label: "Rich and warm — medium contrast with earthy warmth", scores: { autumn: 2 } },
      { label: "High contrast — my hair and eyes are much darker than my skin", scores: { winter: 2 } },
    ],
  },
];

const seasonResults: Record<string, { title: string; description: string; colors: string[]; link: string }> = {
  spring: {
    title: "Spring",
    description: "Your coloring is warm, light, and fresh. You look best in warm, clear, and bright colors like coral, peach, turquoise, and golden yellow.",
    colors: ["#FF7F50", "#FFCBA4", "#FFD700", "#40E0D0", "#7BA05B"],
    link: "/bright-spring-colors",
  },
  summer: {
    title: "Summer",
    description: "Your coloring is cool, soft, and muted. You look best in dusty, cool-toned colors like lavender, soft blue, mauve, sage green, and dusty rose.",
    colors: ["#C4A1D0", "#7EC8E3", "#B47EB3", "#B2AC88", "#DCAE96"],
    link: "/soft-summer-colors",
  },
  autumn: {
    title: "Autumn",
    description: "Your coloring is warm, rich, and earthy. You look best in warm, muted colors like burnt orange, mustard, olive green, rust, and teal.",
    colors: ["#CC5500", "#E1AD01", "#808000", "#B7410E", "#008080"],
    link: "/soft-autumn-colors",
  },
  winter: {
    title: "Winter",
    description: "Your coloring is cool, clear, and high-contrast. You look best in bold, vivid colors like true red, emerald, royal blue, black, and pure white.",
    colors: ["#E10000", "#50C878", "#4169E1", "#000000", "#FFFFFF"],
    link: "/dark-winter-colors",
  },
};

const SeasonQuiz = () => {
  const [answers, setAnswers] = useState<Record<string, number>[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (scores: Record<string, number>) => {
    const newAnswers = [...answers, scores];
    setAnswers(newAnswers);

    if (newAnswers.length === seasonQuizQuestions.length) {
      const totals: Record<string, number> = { spring: 0, summer: 0, autumn: 0, winter: 0 };
      newAnswers.forEach((s) => {
        Object.entries(s).forEach(([key, val]) => {
          totals[key] = (totals[key] || 0) + val;
        });
      });
      const winner = Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0];
      setResult(winner);
    }
  };

  const reset = () => {
    setAnswers([]);
    setResult(null);
  };

  if (result) {
    const r = seasonResults[result];
    return (
      <div className="my-12 rounded-xl p-[2px] bg-gradient-to-br from-rose-300 via-purple-300 to-amber-200">
        <div className="bg-white rounded-[10px] p-6 md:p-8">
          <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Your result</p>
          <p className="font-bold text-gray-900 text-2xl mb-2">You're most likely a {r.title}</p>
          <div className="flex gap-2 my-4">
            {r.colors.map((hex) => (
              <div key={hex} className="w-8 h-8 rounded-full border border-gray-100 shadow-sm" style={{ backgroundColor: hex }} />
            ))}
          </div>
          <p className="text-gray-700 mb-5">{r.description}</p>
          <div className="flex flex-wrap gap-3 items-center">
            <Link to={r.link} className="text-sm font-medium text-gray-900 underline hover:no-underline">Read your full {r.title} guide</Link>
            <span className="text-gray-300">|</span>
            <Link to="/personal-analysis" className="text-sm text-rose-500 hover:text-rose-600 transition-colors">Want to know for sure? Get your personal analysis</Link>
            <span className="text-gray-300">|</span>
            <button onClick={reset} className="text-sm text-gray-500 underline hover:no-underline">Retake quiz</button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = seasonQuizQuestions[answers.length];
  return (
    <div className="my-12 rounded-xl p-[2px] bg-gradient-to-br from-rose-300 via-purple-300 to-amber-200">
      <div className="bg-white rounded-[10px] p-6 md:p-8">
        <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Question {answers.length + 1} of {seasonQuizQuestions.length}</p>
        <p className="font-semibold text-gray-900 text-lg mb-4">{currentQ.question}</p>
        <div className="space-y-2">
          {currentQ.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt.scores)}
              className="block w-full text-left px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-rose-200 hover:bg-rose-50/30 transition-colors text-gray-700"
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const WhatSeasonAmI = () => {
  const seasons = [
    {
      name: "Spring",
      subtitle: "Light Spring, True Spring, Bright Spring",
      description: "Spring types have warm undertones with a light, clear, and bright appearance. Your coloring is fresh and vibrant like spring flowers.",
      characteristics: [
        "Warm golden or peachy undertones",
        "Light to medium skin that may freckle",
        "Hair ranges from golden blonde to light brown with warm highlights",
        "Eyes are often blue, green, or light hazel with golden flecks"
      ],
      bestColors: ["Coral", "Peach", "Warm pink", "Golden yellow", "Turquoise", "Warm green", "Ivory"],
      avoidColors: ["Black", "Dark navy", "Burgundy", "Cool gray"],
      celebrities: "Taylor Swift, Nicole Kidman, Emma Stone"
    },
    {
      name: "Summer",
      subtitle: "Light Summer, True Summer, Soft Summer",
      description: "Summer types have cool undertones with a soft, muted appearance. Your coloring is delicate and harmonious like a misty summer morning.",
      characteristics: [
        "Cool pink or rosy undertones",
        "Skin can range from fair to medium with a soft appearance",
        "Hair is often ash blonde, ash brown, or soft brown without warm highlights",
        "Eyes are typically soft blue, gray, green, or hazel"
      ],
      bestColors: ["Dusty rose", "Soft blue", "Lavender", "Mauve", "Sage green", "Powder pink", "Soft white"],
      avoidColors: ["Orange", "Bright yellow", "Warm brown", "Black"],
      celebrities: "Kate Middleton, Jennifer Aniston, Cate Blanchett"
    },
    {
      name: "Autumn",
      subtitle: "Soft Autumn, True Autumn, Dark Autumn",
      description: "Autumn types have warm undertones with a rich, earthy appearance. Your coloring is warm and grounded like fall foliage.",
      characteristics: [
        "Warm golden, olive, or bronze undertones",
        "Skin may have a golden glow or be warm ivory",
        "Hair is often auburn, chestnut, golden brown, or copper",
        "Eyes are commonly brown, hazel, green, or warm blue"
      ],
      bestColors: ["Burnt orange", "Mustard", "Olive green", "Rust", "Chocolate brown", "Teal", "Warm red"],
      avoidColors: ["Bright pink", "Cool purple", "Icy blue", "Silver"],
      celebrities: "Julia Roberts, Jessica Alba, Amy Adams"
    },
    {
      name: "Winter",
      subtitle: "Dark Winter, True Winter, Bright Winter",
      description: "Winter types have cool undertones with high contrast and a clear, vivid appearance. Your coloring is striking and dramatic like a winter landscape.",
      characteristics: [
        "Cool blue, pink, or olive undertones",
        "Skin can range from very fair to very deep with cool undertones",
        "Hair is often dark brown, black, or platinum (high contrast with skin)",
        "Eyes are typically dark brown, black, or striking blue/green"
      ],
      bestColors: ["True red", "Emerald", "Royal blue", "Hot pink", "Pure white", "Black", "Icy purple"],
      avoidColors: ["Orange", "Muted earth tones", "Warm beige", "Golden yellow"],
      celebrities: "Lupita Nyong'o, Megan Fox, Anne Hathaway"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="What Season Am I? Complete Color Analysis Guide 2026"
        description="Discover your seasonal color palette with our comprehensive guide. Learn if you're Spring, Summer, Autumn, or Winter and find the colors that make you glow."
        keywords="what season am i, color analysis, seasonal color analysis, spring summer autumn winter colors, skin undertone, color palette, personal color analysis"
        canonicalUrl="/what-season-am-i"
        ogImage="/what-season-am-i-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-10-15",
          modifiedTime: "2026-01-06",
          section: "Color Analysis",
          tags: ["color analysis", "seasonal colors", "skin undertone", "personal styling"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "What Season Am I?", url: "/what-season-am-i" }
        ]}
        faq={[
          { question: "What are the 4 color seasons?", answer: "The 4 color seasons are Spring, Summer, Autumn, and Winter. Each season is determined by your skin's undertone (warm or cool) and your overall contrast level (light or deep)." },
          { question: "How do I find my color season?", answer: "Look at your vein color (blue/purple = cool, green = warm), test gold vs silver jewelry, and assess your natural contrast level between hair, skin, and eyes." },
          { question: "What colors suit warm undertones?", answer: "Warm undertones (Spring and Autumn) look best in earth tones, warm reds, oranges, yellows, olive greens, and gold jewelry." },
          { question: "What colors suit cool undertones?", answer: "Cool undertones (Summer and Winter) look best in blues, purples, pinks, cool reds, emerald green, and silver jewelry." }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What Season{" "}
              Am I?
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Discover your seasonal color palette and unlock the colors that make you glow. The complete guide to Spring, Summer, Autumn, and Winter color analysis.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/what-season-hero.png`}
              alt="Seasonal color analysis guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              "What season am I?" is one of the most popular questions in the world of personal styling. Seasonal color analysis is a method that categorizes your natural coloring into one of four seasons - Spring, Summer, Autumn, or Winter - to help you find the colors that enhance your natural beauty.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              This system has been used by fashion experts and image consultants for decades, and thanks to TikTok and social media, it's now more popular than ever. With over 2 million monthly searches, finding your color season has become essential for anyone who wants to look their best.
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Does Your Season Matter?</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                When you wear colors from your season, magical things happen: your skin looks clearer, your eyes appear brighter, and you look healthier and more vibrant. Wearing the wrong colors can make you look tired, washed out, or older than you are. Knowing your season transforms your shopping experience forever.
              </p>
            </div>
          </div>

          {/* How to Find Your Season */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Find Your Color Season</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 1: Determine Your Undertone</h3>
                <p className="text-gray-600 mb-4">
                  Look at the veins on your wrist in natural light:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Blue/Purple veins:</strong> Cool undertone (Summer or Winter)</li>
                  <li><strong>Green/Olive veins:</strong> Warm undertone (Spring or Autumn)</li>
                  <li><strong>Mix of both:</strong> You might be a "soft" season</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 2: Assess Your Contrast Level</h3>
                <p className="text-gray-600 mb-4">
                  Look at the contrast between your hair, skin, and eyes:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>High contrast:</strong> Winter or Bright Spring</li>
                  <li><strong>Medium contrast:</strong> True seasons</li>
                  <li><strong>Low contrast:</strong> Soft or Light seasons</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Test: Gold vs Silver</h3>
              <p className="text-gray-700 leading-relaxed">
                Hold gold and silver jewelry against your face. If <strong>gold</strong> makes you glow, you're likely a warm season (Spring or Autumn). If <strong>silver</strong> is more flattering, you're probably a cool season (Summer or Winter). If both work, you might be a neutral sub-season.
              </p>
            </div>
          </section>

          {/* Season Quiz */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-16">Take the Quiz: What Season Am I?</h2>
          <p className="text-lg text-gray-600 mb-2">Answer 5 quick questions to find your most likely color season.</p>
          <SeasonQuiz />

          <AnalysisCTA />
        </div>
      </article>

      {/* The Four Seasons */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            The Four Color Seasons Explained
          </h2>

          <div className="space-y-12">
            {seasons.map((season) => (
              <div key={season.name} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className={`inline-block px-4 py-2 rounded-full text-white font-semibold mb-4 ${
                      season.name === 'Spring' ? 'bg-gradient-to-r from-yellow-400 to-orange-400' :
                      season.name === 'Summer' ? 'bg-gradient-to-r from-pink-400 to-purple-400' :
                      season.name === 'Autumn' ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                      'bg-gradient-to-r from-blue-500 to-purple-600'
                    }`}>
                      {season.name}
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{season.subtitle}</p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">{season.description}</p>

                    <h4 className="font-semibold text-gray-900 mb-3">Characteristics:</h4>
                    <ul className="space-y-2 mb-6">
                      {season.characteristics.map((char, i) => (
                        <li key={i} className="text-gray-600 flex items-start">
                          <span className="text-pink-500 mr-2">•</span>
                          {char}
                        </li>
                      ))}
                    </ul>

                    <p className="text-sm text-gray-500">
                      <strong>Celebrity examples:</strong> {season.celebrities}
                    </p>
                  </div>

                  <div>
                    <div className="bg-green-50 rounded-xl p-6 mb-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Best Colors for {season.name}:</h4>
                      <div className="flex flex-wrap gap-2">
                        {season.bestColors.map((color, i) => (
                          <span key={i} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-green-200 flex items-center gap-1.5">
                            {colorHexMap[color] && (
                              <span
                                className="inline-block w-3.5 h-3.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: colorHexMap[color], border: colorHexMap[color] === '#FFFFFF' || colorHexMap[color] === '#FFFFF0' || colorHexMap[color] === '#F5F5F0' ? '1px solid #d1d5db' : 'none' }}
                              />
                            )}
                            {color}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-400 mt-3">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>
                    </div>

                    <div className="bg-red-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Colors to Avoid:</h4>
                      <div className="flex flex-wrap gap-2">
                        {season.avoidColors.map((color, i) => (
                          <span key={i} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-red-200 flex items-center gap-1.5">
                            {colorHexMap[color] && (
                              <span
                                className="inline-block w-3.5 h-3.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: colorHexMap[color], border: colorHexMap[color] === '#FFFFFF' ? '1px solid #d1d5db' : 'none' }}
                              />
                            )}
                            {color}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-400 mt-3">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 Season System */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The 12-Season System</h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            For more precision, each season is divided into three sub-types based on depth, warmth, and clarity:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">Spring</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Light Spring</li>
                <li>True Spring</li>
                <li>Bright Spring</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">Summer</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Light Summer</li>
                <li>True Summer</li>
                <li>Soft Summer</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">Autumn</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Soft Autumn</li>
                <li>True Autumn</li>
                <li>Dark Autumn</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">Winter</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Dark Winter</li>
                <li>True Winter</li>
                <li>Bright Winter</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Continue Your Color Journey
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/warm-vs-cool-undertones" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Warm vs Cool Undertones</h3>
                <p className="text-sm text-gray-600">Learn how to identify your undertone with simple tests</p>
              </Link>
              <Link to="/soft-summer-colors" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Soft Summer Colors</h3>
                <p className="text-sm text-gray-600">The complete palette guide for Soft Summers</p>
              </Link>
              <Link to="/true-autumn-colors" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">True Autumn Colors</h3>
                <p className="text-sm text-gray-600">Discover the rich, warm palette for Autumns</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl">
        <AnalysisCTA />
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                How do I know what color season I am?
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">Start by determining your undertone — check if your veins appear blue/purple (cool) or green (warm). Then assess your contrast level between hair, skin, and eyes. Warm + light/bright = Spring, Cool + soft/muted = Summer, Warm + deep/rich = Autumn, Cool + high contrast = Winter. For the most accurate result, a professional or AI-powered color analysis can evaluate your specific combination of features.</p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                Can my color season change over time?
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">Your underlying undertone doesn't change, but factors like hair color changes (natural graying or dyeing), tanning, and aging can shift your best sub-season. For example, someone who was a Bright Spring in their youth might shift toward a Light Spring as their hair lightens with age. It's worth re-evaluating every few years.</p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                What's the difference between the 4-season and 12-season system?
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">The 4-season system categorizes you into Spring, Summer, Autumn, or Winter based on undertone and contrast. The 12-season system further divides each season into three sub-types (e.g., Light Summer, True Summer, Soft Summer) for more precision. The 12-season approach accounts for people who fall between two seasons and gives more tailored color recommendations.</p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                What if I don't fit neatly into one season?
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">Many people fall between seasons, which is exactly why the 12-season system exists. "Cusp" sub-seasons like Soft Summer (between Summer and Autumn) or Bright Spring (between Spring and Winter) help bridge the gap. If you're unsure, a professional analysis can identify your exact sub-season and which colors from neighboring palettes also work for you.</p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                Does skin tone determine my color season?
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">Skin tone (how light or dark your skin is) is different from undertone (whether your skin has warm or cool pigments beneath the surface). People of any skin tone can be any season. A person with deep skin can be a Spring, and a person with fair skin can be a Winter. It's your undertone, contrast, and overall coloring that determine your season — not how light or dark you are.</p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                How accurate is online color analysis compared to in-person?
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">Traditional in-person analysis uses fabric draping under controlled lighting, which is very accurate but expensive and hard to access. Modern AI-powered analysis has become remarkably accurate by evaluating multiple features from photos. While lighting conditions in photos can affect results, AI tools analyze undertone, contrast, and feature combinations in ways that are often more consistent than self-assessment quizzes.</p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                Can I wear colors outside my season?
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">Absolutely! Color analysis is a guide, not a rule. Knowing your season helps you understand which colors naturally enhance your appearance, but fashion is also about self-expression. A helpful trick is to keep "off-season" colors further from your face — for example, wear them as pants, skirts, or accessories while keeping your best colors near your face in tops and scarves.</p>
            </details>
          </div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do I know what color season I am?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Start by determining your undertone — check if your veins appear blue/purple (cool) or green (warm). Then assess your contrast level between hair, skin, and eyes. Warm + light/bright = Spring, Cool + soft/muted = Summer, Warm + deep/rich = Autumn, Cool + high contrast = Winter. For the most accurate result, a professional or AI-powered color analysis can evaluate your specific combination of features."
              }
            },
            {
              "@type": "Question",
              "name": "Can my color season change over time?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Your underlying undertone doesn't change, but factors like hair color changes (natural graying or dyeing), tanning, and aging can shift your best sub-season. For example, someone who was a Bright Spring in their youth might shift toward a Light Spring as their hair lightens with age. It's worth re-evaluating every few years."
              }
            },
            {
              "@type": "Question",
              "name": "What's the difference between the 4-season and 12-season system?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The 4-season system categorizes you into Spring, Summer, Autumn, or Winter based on undertone and contrast. The 12-season system further divides each season into three sub-types (e.g., Light Summer, True Summer, Soft Summer) for more precision. The 12-season approach accounts for people who fall between two seasons and gives more tailored color recommendations."
              }
            },
            {
              "@type": "Question",
              "name": "What if I don't fit neatly into one season?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Many people fall between seasons, which is exactly why the 12-season system exists. 'Cusp' sub-seasons like Soft Summer (between Summer and Autumn) or Bright Spring (between Spring and Winter) help bridge the gap. If you're unsure, a professional analysis can identify your exact sub-season and which colors from neighboring palettes also work for you."
              }
            },
            {
              "@type": "Question",
              "name": "Does skin tone determine my color season?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Skin tone (how light or dark your skin is) is different from undertone (whether your skin has warm or cool pigments beneath the surface). People of any skin tone can be any season. A person with deep skin can be a Spring, and a person with fair skin can be a Winter. It's your undertone, contrast, and overall coloring that determine your season — not how light or dark you are."
              }
            },
            {
              "@type": "Question",
              "name": "How accurate is online color analysis compared to in-person?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Traditional in-person analysis uses fabric draping under controlled lighting, which is very accurate but expensive and hard to access. Modern AI-powered analysis has become remarkably accurate by evaluating multiple features from photos. While lighting conditions in photos can affect results, AI tools analyze undertone, contrast, and feature combinations in ways that are often more consistent than self-assessment quizzes."
              }
            },
            {
              "@type": "Question",
              "name": "Can I wear colors outside my season?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! Color analysis is a guide, not a rule. Knowing your season helps you understand which colors naturally enhance your appearance, but fashion is also about self-expression. A helpful trick is to keep 'off-season' colors further from your face — for example, wear them as pants, skirts, or accessories while keeping your best colors near your face in tops and scarves."
              }
            }
          ]
        })}} />
      </section>

      <Footer />
    </div>
  );
};

export default WhatSeasonAmI;
