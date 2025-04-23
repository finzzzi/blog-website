import { getRecentPosts, getCategories } from '@/lib/api';
import BlogCard from '@/components/BlogCard';

export default async function Home() {
  const [recentPosts, categories] = await Promise.all([
    getRecentPosts(),
    getCategories()
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16 relative rounded-xl overflow-hidden h-[400px]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black/30 z-0">
          <img
            src="/blog-banner.jpeg"
            alt="Blog Theme"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to MyBlog</h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover insightful articles and the latest trends in technology, 
              business, and creative thinking.
            </p>
            <a 
              href="/blog" 
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Explore Articles
            </a>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {recentPosts.map(post => (
            <BlogCard key={post.objectId} post={post} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <a
              key={index}
              href={`/blog?category=${encodeURIComponent(category)}`}
              className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm transition-colors"
            >
              {category}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}