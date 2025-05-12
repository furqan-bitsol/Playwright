import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests/',
  timeout: 300000,
  use: {
    baseURL: 'https://mh-doctor-portal.bitsol.dev/',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    ignoreHTTPSErrors: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 30000,
  },
  // projects: [
  //   {
  //     name: 'Chrome',
  //     use: {
  //       browserName: 'chromium',
  //     },
  //   },
  //   {
  //     name: 'Firefox',
  //     use: {
  //       browserName: 'firefox',
  //     },
  //   },
  //   {
  //     name: 'Safari',
  //     use: {
  //       browserName: 'webkit',
  //     },
  //   },
  // ],
  reporter: [['html'], ['list']],
};

export default config;
