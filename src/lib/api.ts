import axios from 'axios';
import { Post } from '@/types/blog';

const API_BASE = `https://api.backendless.com/${process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID}/${process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY}`;

export async function getRecentPosts(): Promise<Post[]> {
  try {
    const response = await axios.get(`${API_BASE}/data/Posts`, {
      params: {
        sortBy: 'created DESC',
        pageSize: '3'
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const response = await axios.get(`${API_BASE}/data/Posts`, {
      params: {
        property: '`category`',
        distinct: true
      }
    });
    return response.data.map((item: { category: string }) => item.category) || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get(`${API_BASE}/data/Posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const fetchPostBySlug = async (slug: string): Promise<Post> => {
  try {
    const response = await axios.get(`${API_BASE}/data/Posts`, {
      params: {
        where: `slug='${slug}'`
      }
    });
    return response.data[0];
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    throw error;
  }
};