export interface Post {
  objectId: string;
  title: string;
  slug: string;
  content: string;
  category: string;
  created: string;
  updated: string;
  featuredImage?: string;
  ownerId: string;
}

export interface BlogState {
  posts: Post[];
  filteredPosts: Post[];
  categories: string[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  selectedCategory: string | null;
}