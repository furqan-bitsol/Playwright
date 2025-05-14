import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests/',
  timeout: 300000,
  use: {
    baseURL: 'https://ecommerce-omega-three-23.vercel.app/',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    ignoreHTTPSErrors: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 30000,
  },
  reporter: [['html'], ['list']],
};

export default config;
