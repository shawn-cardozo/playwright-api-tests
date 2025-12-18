import { test, expect } from '@playwright/test';
import { PostsAPI } from '../api/posts.api';

test.describe('JSONPlaceholder Posts API', () => {
  test('Get all posts', async ({ request }) => {
    const api = new PostsAPI(request);
    const response = await api.getPosts();

    console.log(response);

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
    console.log(`Total posts: ${body.length}`);
  });

  test('Get single post', async ({ request }) => {
    const api = new PostsAPI(request);
    const response = await api.getPost(1);

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty('id', 1);
  });

  test('Create new post', async ({ request }) => {
    const api = new PostsAPI(request);
    const payload = { title: 'Hello', body: 'World', userId: 1 };

    const response = await api.createPost(payload);

    expect(response.status()).toBe(201);

    const body = await response.json();
    console.log('Created post ID:', body.id);
  });
});
