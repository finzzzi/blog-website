export interface Post {
  objectId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  category: string; // Changed from Category object to string
  publishedAt: string;
}