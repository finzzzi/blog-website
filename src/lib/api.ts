import axios from 'axios';
import { Post } from '@/types/blog';

const API_BASE = `https://api.backendless.com/${process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID}/${process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY}`;

export async function getRecentPosts(): Promise<Post[]> {
  try {
    const response = await axios.get(`${API_BASE}/data/Posts`, {
      params: {
        sortBy: "publishedAt DESC",
        pageSize: "3"
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
        properties: "category",
        distinct: "category"
      }
    });
    return response.data || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}