import { create } from 'zustand';

type Post = {
  objectId: string;
  title: string;
  slug: string;
  content: string;
  featuredImage?: string;
  category: string;
  created: string;
};

type BlogState = {
  posts: Post[];
  filteredPosts: Post[];
  searchQuery: string;
  selectedCategory: string | null;
  loading: boolean;
};

type BlogActions = {
  setPosts: (posts: Post[]) => void;
  setSearchQuery: (query: string) => void;
  setCategory: (category: string | null) => void;
  filterPosts: () => void;
};

export const useBlogStore = create<BlogState & BlogActions>((set, get) => ({
  // Initial state
  posts: [],
  filteredPosts: [],
  searchQuery: '',
  selectedCategory: null,
  loading: false,

  // Actions
  setPosts: (posts) => set({ posts, filteredPosts: posts }),
  
  setSearchQuery: (query) => {
    set({ searchQuery: query });
    get().filterPosts(); // Trigger filtering immediately
  },
  
  setCategory: (category) => {
    set({ selectedCategory: category });
    get().filterPosts(); // Trigger filtering immediately
  },
  
  filterPosts: () => {
    const { posts, searchQuery, selectedCategory } = get();
    
    const filtered = posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    
    set({ filteredPosts: filtered });
  }
}));