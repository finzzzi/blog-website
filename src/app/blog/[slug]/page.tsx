"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchPostBySlug } from '@/lib/api';
import { Post } from '@/types/blog';
import { format } from 'date-fns';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const loadPost = async () => {
      setIsLoading(true);
      try {
        const postData = await fetchPostBySlug(slug as string);
        if (!postData) {
          throw new Error('Post not found');
        }
        setPost(postData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load post');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="text-center py-12">
          <p>Loading post...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <p className="text-red-500 mb-4">{error}</p>
          <Link href="/blog" className="text-blue-600 hover:underline">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-600 hover:underline">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | My Blog</title>
        <meta name="description" content={post.content.substring(0, 160)} />
      </Head>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <article className="mb-8">
          {post.featuredImage && (
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
          )}
          
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {post.category}
            </span>
            <span className="mx-2">•</span>
            <span>{format(new Date(post.created), 'MMMM d, yyyy')}</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
          
          <div 
            className="prose max-w-none" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>

        <div className="border-t pt-6">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                clipRule="evenodd" 
              />
            </svg>
            Back to all posts
          </Link>
        </div>
      </div>
    </>
  );
}