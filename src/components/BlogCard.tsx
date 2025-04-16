import Link from 'next/link';
import { Post } from '@/types/blog';

export default function BlogCard({ post }: { post: Post }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
      {post.featuredImage && (
        <div className="h-48 overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {post.category && (
          <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mb-2">
            {post.category}
          </span>
        )}
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {new Date(post.publishedAt).toLocaleDateString()}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}