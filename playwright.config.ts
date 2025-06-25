import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './Furqan/tests/',
  timeout: 300000,
  use: {
    baseURL: 'https://stage-b2b.deaftawk.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    ignoreHTTPSErrors: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 30000,
    headless: false, // Set to true for headless mode
  },
  reporter: [['html'], ['list']],
};

export default config;
