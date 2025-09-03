import { test, expect } from '@playwright/test';

test('demo-web-app Recording Session', async ({ page }) => {
  await page.goto('http://157.245.241.244/proxy/');
  // Retry strategy for robust clicking
  await page.waitForSelector('.hero-content', { timeout: 10000 });
  await page.click('.hero-content');
  // Retry strategy for robust clicking
  await page.waitForSelector('.cta-btn', { timeout: 10000 });
  await page.click('.cta-btn');
  await page.waitForSelector('body:not(.loading)', { timeout: 5000 });
  // Retry strategy for robust clicking
  await page.waitForSelector('.nav-link', { timeout: 10000 });
  await page.click('.nav-link');
  await page.evaluate(() => window.scrollTo(0, 466.5));
  // Retry strategy for robust clicking
  await page.waitForSelector('.nav-link.active', { timeout: 10000 });
  await page.click('.nav-link.active');
});