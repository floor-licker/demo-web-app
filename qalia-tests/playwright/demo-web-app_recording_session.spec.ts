import { test, expect } from '@playwright/test';

test('demo-web-app Recording Session', async ({ page }) => {
  await page.goto('http://157.245.241.244/proxy/');
  // Retry strategy for robust clicking
  await page.waitForSelector('.nav-link', { timeout: 10000 });
  await page.click('.nav-link');
  // Retry strategy for robust clicking
  await page.waitForSelector('.nav-link', { timeout: 10000 });
  await page.click('.nav-link');
  await page.evaluate(() => window.scrollTo(0, 1518));
});