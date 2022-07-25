const { test, expect } = require("@playwright/test");

test("book kid", async ({ page }) => {
  await page.goto("https://www.sangdad.com/shop/");
  await page.waitForLoadState("networkidle");
  await page.locator(".cat-item-408").click();
  // await page.pause();
  const books = page.locator("article[id*='post']");
  await books.first().waitFor();
  await expect(books).toHaveCount(16);
});

test.only("book kid 2", async ({ page }) => {
  await page.goto("https://www.sangdad.com/shop/");
  await page.waitForLoadState("networkidle");
  await page.locator(".cat-item-408").click();
  // await page.pause();
  const books = page.locator("article[id*='post']");
  await books.first().waitFor();
  const allBooks = await books
    .locator(".elementor-heading-title")
    .allTextContents();
  await expect(allBooks.find((x) => x === "ไทยจานโปรด")).toBeFalsy();
});
