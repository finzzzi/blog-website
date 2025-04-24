"use client";

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { fetchPosts } from '@/lib/api';
import { Post, BlogState } from '@/types/blog';

type BlogAction =
  | { type: 'FETCH_POSTS_REQUEST' }
  | { type: 'FETCH_POSTS_SUCCESS'; payload: Post[] }
  | { type: 'FETCH_POSTS_FAILURE'; payload: string }
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_SELECTED_CATEGORY'; payload: string | null }
  | { type: 'FILTER_POSTS' };

const initialState: BlogState = {
  posts: [],
  filteredPosts: [],
  categories: [],
  isLoading: false,
  error: null,
  searchQuery: '',
  selectedCategory: null,
};

const blogReducer = (state: BlogState, action: BlogAction): BlogState => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return { ...state, isLoading: true, error: null };
    case 'FETCH_POSTS_SUCCESS':
      const categories = Array.from(new Set(action.payload.map(post => post.category)));
      return {
        ...state,
        posts: action.payload,
        filteredPosts: action.payload,
        categories,
        isLoading: false,
      };
    case 'FETCH_POSTS_FAILURE':
        return { 
          ...state, 
          isLoading: false, 
          error: typeof action.payload === 'string' ? action.payload : 'An unknown error occurred' 
        };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'SET_SELECTED_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'FILTER_POSTS':
      const { posts, searchQuery, selectedCategory } = state;
      let filtered = [...posts];
      
      if (selectedCategory) {
        filtered = filtered.filter(post => post.category === selectedCategory);
      }
      
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(
          post =>
            post.title.toLowerCase().includes(query) ||
            post.content.toLowerCase().includes(query) ||
            post.category.toLowerCase().includes(query)
        );
      }
      
      return { ...state, filteredPosts: filtered };
    default:
      return state;
  }
};

const BlogContext = createContext<{
  state: BlogState;
  dispatch: React.Dispatch<BlogAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  useEffect(() => {
    const loadPosts = async () => {
      dispatch({ type: 'FETCH_POSTS_REQUEST' });
      try {
        const posts = await fetchPosts();
        dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: posts });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to fetch posts';
        dispatch({ type: 'FETCH_POSTS_FAILURE', payload: errorMessage });
      }
    };

    loadPosts();
  }, []);

  useEffect(() => {
    dispatch({ type: 'FILTER_POSTS' });
  }, [state.searchQuery, state.selectedCategory]);

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);