import { APIRequestContext } from '@playwright/test';

export class PostsAPI {
  constructor(private request: APIRequestContext) {}

  // Get all posts
  getPosts() {
    return this.request.get('/posts');
  }

  // Get a single post
  getPost(id: number) {
    return this.request.get(`/posts/${id}`);
  }

  // Create a new post
  createPost(payload: { title: string; body: string; userId: number }) {
    return this.request.post('/posts', { data: payload });
  }
}