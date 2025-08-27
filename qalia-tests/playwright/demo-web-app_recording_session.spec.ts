import { test, expect } from '@playwright/test';

test('demo-web-app Recording Session', async ({ page }) => {
  // Retry strategy for robust clicking
  await page.waitForSelector('.nav-link', { timeout: 10000 });
  await page.click('.nav-link');
  // Retry strategy for robust clicking
  await page.waitForSelector('/html/body', { timeout: 10000 });
  await page.click('/html/body');
  await page.locator('window').scrollIntoViewIfNeeded();
  // Retry strategy for robust clicking
  await page.waitForSelector('.container', { timeout: 10000 });
  await page.click('.container');
  // Retry strategy for robust clicking
  await page.waitForSelector('.nav-link', { timeout: 10000 });
  await page.click('.nav-link');
  await page.locator('window').scrollIntoViewIfNeeded();
});