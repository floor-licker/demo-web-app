import { test, expect } from '@playwright/test';

test('demo-web-app Recording Session', async ({ page }) => {
  await page.goto('http://157.245.241.244/proxy/');
  // Retry strategy for robust clicking
  await page.waitForSelector('/html/body/section[1]/div/div/h1', { timeout: 10000 });
  await page.click('/html/body/section[1]/div/div/h1');
  // Retry strategy for robust clicking
  await page.waitForSelector('.cta-btn', { timeout: 10000 });
  await page.click('.cta-btn');
  await page.waitForSelector('body:not(.loading)', { timeout: 5000 });
  await page.locator('window').scrollIntoViewIfNeeded();
  await page.locator('window').scrollIntoViewIfNeeded();
});