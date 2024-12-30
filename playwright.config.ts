import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false, // Zmień na true, jeśli chcesz uruchamiać w tle
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'on',
    video: 'on',
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
