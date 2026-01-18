import { BlogPost } from "../data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
  size?: "small" | "medium" | "large";
}

const BlogCard: React.FC<BlogCardProps> = ({ post, size = "medium" }) => {
  const aspectClasses = {
    small: "aspect-[4/5]",
    medium: "aspect-[4/5]",
    large: "aspect-[3/2]"
  };

  return (
    <a href={post.href} className="group block">
      <div className={`${aspectClasses[size]} overflow-hidden bg-gray-100 mb-4`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">{post.category}</p>
      <h2
        className={`font-medium text-gray-900 group-hover:text-gray-600 transition-colors leading-tight ${size === "large" ? "text-xl" : ""}`}
        style={size === "large" ? { fontFamily: "'Playfair Display', Georgia, serif" } : undefined}
      >
        {post.title}
      </h2>
      {size === "large" && (
        <p className="text-gray-600 text-sm mt-2">{post.description}</p>
      )}
    </a>
  );
};

export default BlogCard;
