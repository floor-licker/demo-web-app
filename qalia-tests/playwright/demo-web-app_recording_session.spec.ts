import { test, expect } from '@playwright/test';

test('demo-web-app Recording Session', async ({ page }) => {
  // Retry strategy for robust clicking
  await page.waitForSelector('.nav-link', { timeout: 10000 });
  await page.click('.nav-link');
  await page.locator('window').scrollIntoViewIfNeeded();
});