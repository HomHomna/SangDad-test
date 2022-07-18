// @ts-check
const { test, expect } = require("@playwright/test");

const booksName = ["ไทยจานโปรด", "อาหารไทยจานเด็ด", "อาหารสุขภาพ บ้านคุณนิดดา"];
const priceBooks = ["440 ฿", "150 ฿", "236 ฿"];

test.only("check amount total books in first page and search book ไทยจานโปรด", async ({
  page,
}) => {
  await page.goto("https://www.sangdad.com/shop/");
  const books = page.locator("article[id*='post']");
  await books.first().waitFor();
  const count = await books.count();
  // console.log(count)
  await expect(books).toHaveCount(20);
  const allBooks = await books
    .locator(".elementor-heading-title")
    .allTextContents();
  await expect(allBooks.find((x) => x === booksName[0])).toBeTruthy();
  const index = allBooks.findIndex((x) => x === booksName[0]);
  const allPrice = await books
    .locator("ins .woocommerce-Price-amount")
    .allTextContents();
  await expect(allPrice.find((y) => y === allBooks[index])).toBeTruthy();
});

test("check amount books in 15th page", async ({ page }) => {
  await page.goto("https://www.sangdad.com/shop/");
  await page.locator("[href*='page/15']").click();
  const books = page.locator("article[id*='post']");
  await books.first().waitFor();
  await expect(books).toHaveCount(3);
});

test("search book อาหารจานเด็ด", async ({ page }) => {
  await page.goto("https://www.sangdad.com/shop/");
  await page.locator(".menu-item-906").first().click();
  const books = page.locator("article[id*='post']");
  await books.first().waitFor();
  const allBooks = await books
    .locator(".elementor-heading-title")
    .allTextContents();
  expect(allBooks.find((x) => x === booksName[1])).toBeTruthy();
});

test("search สุขภาพ in search tag", async ({ page }) => {
  await page.goto("https://www.sangdad.com/shop/");
  await page.locator("input#dgwt-wcas-search-input-12c2").fill("สุขภาพ");
  await page.locator("input#dgwt-wcas-search-input-12c2").press("Enter");
  const books = page.locator("article[id*='post']");
  await books.first().waitFor();
  await expect(books).toHaveCount(12);
  const allBooks = await books
    .locator(".elementor-heading-title")
    .allTextContents();
  expect(allBooks.find((x) => x === booksName[2])).toBeTruthy();
});
