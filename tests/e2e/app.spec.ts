import { test, expect } from '@playwright/test'

test('homepage loads successfully', async ({ page }) => {
  await page.goto('http://localhost:5174')
  
  // Check if the app container exists
  const app = await page.locator('.app')
  await expect(app).toBeVisible()
}) 