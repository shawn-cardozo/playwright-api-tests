import { defineConfig } from '@playwright/test';
import { getEnvConfig } from './utils/env';

const ENV = process.env.ENV || 'prod';
const config = getEnvConfig(ENV);

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: config.baseURL
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/html-report', open: 'never' }],
    ['allure-playwright']
  ]
});