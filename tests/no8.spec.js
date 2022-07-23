const { test, expect, request } = require("@playwright/test");
const booksName = ["กินเล่น เช่นไทย", "โอชะแห่งล้านนา"];
test("test No. 8", async ({ page }) => {
  await page.goto("https://www.sangdad.com/shop/");
  await page.waitForLoadState("networkidle");
  await page.locator("[title*='ตำราอาหารยอดนิยม']").click();
  await page.locator("#post-4814").click();
  // await page.pause();
  // await page.locator(".elementor-row").waitFor();
  await page.locator("button.single_add_to_cart_button").click({ delay: 400 });
  await expect(page.locator(".xoo-wsch-text")).toHaveText("Your Cart");
  await expect(page.locator(".xoo-wsc-pname")).toHaveText(booksName[0]);
  // await page.pause();
  await expect(page.locator(".xoo-wscb-count")).toHaveText("1");
  await expect(page.locator(".xoo-wsc-ft-amt bdi")).toHaveText("382 ฿");
});

test("test No. 9", async ({ page }) => {
  await page.goto("https://www.sangdad.com/shop/");
  await page.waitForLoadState("networkidle");
  await page.locator("[title*='ตำราอาหารยอดนิยม']").click();
  await page.locator("#post-4814").click();
  await page.locator("button.single_add_to_cart_button").click({ delay: 400 });
  await expect(page.locator(".xoo-wsch-text")).toHaveText("Your Cart");
  await expect(page.locator(".xoo-wsc-pname")).toHaveText(booksName[0]);
  // await page.pause();
  await expect(page.locator(".xoo-wscb-count")).toHaveText("1");
  await expect(page.locator(".xoo-wsc-ft-amt bdi")).toHaveText("382 ฿");
  await page.goBack();
  await page.locator("#post-989").click();
  await page.locator("button.single_add_to_cart_button").click({ delay: 500 });
  await expect(page.locator(".xoo-wscb-count")).toHaveText("2");

  const countBooks = await page.locator(".xoo-wsc-pname").count();
  for (let i = 0; i < countBooks; ++i) {
    const title = page.locator(".xoo-wsc-pname").nth(i);
    await expect(title).toHaveText(booksName[i]);
    console.log(booksName[i]);
  }
  await expect(page.locator(".xoo-wsc-ft-amt bdi")).toHaveText("782 ฿");
});

test("test No. 10", async ({ page }) => {
  await page.goto("https://www.sangdad.com/shop/");
  await page.waitForLoadState("networkidle");
  await page.locator("[title*='ตำราอาหารยอดนิยม']").click();
  await page.locator("#post-4814").click();
  await page.locator("button.single_add_to_cart_button").click({ delay: 300 });
  await expect(page.locator(".xoo-wsch-text")).toHaveText("Your Cart");
  await expect(page.locator(".xoo-wsc-pname")).toHaveText(booksName[0]);
  // await page.pause();
  await expect(page.locator(".xoo-wscb-count")).toHaveText("1");
  await expect(page.locator(".xoo-wsc-ft-amt bdi")).toHaveText("382 ฿");
  await page.goBack();
  await page.locator("#post-989").click();
  await page.locator("button.single_add_to_cart_button").click({ delay: 500 });
  await expect(page.locator(".xoo-wscb-count")).toHaveText("2");

  const countBooks = await page.locator(".xoo-wsc-pname").count();
  for (let i = 0; i < countBooks; ++i) {
    const title = page.locator(".xoo-wsc-pname").nth(i);
    await expect(title).toHaveText(booksName[i]);
    console.log(booksName[i]);
  }
  await expect(page.locator(".xoo-wsc-ft-amt bdi")).toHaveText("782 ฿");

  for (let i = 0; i < countBooks; ++i) {
    if (
      (await page.locator(".xoo-wsc-pname").nth(i).textContent()) ===
      booksName[0]
    ) {
      await page.locator(".xoo-wsc-icon-trash").nth(i).click();
      break;
    }
  }
  await expect(page.locator(".xoo-wsc-ft-amt bdi")).toHaveText("400 ฿");
  await expect(page.locator(".xoo-wscb-count")).toHaveText("1");
  await page.pause();
});

test.only("test No. 11 Payment Page", async ({ page }) => {
  await page.goto("https://www.sangdad.com/shop/");
  // await page.waitForLoadState("networkidle");
  // await page.locator("[title*='ตำราอาหารยอดนิยม']").click();
  // await page.locator("#post-4814").click();

  // await page.locator("button.single_add_to_cart_button").click({ delay: 300 });
  // await expect(page.locator(".xoo-wsch-text")).toHaveText("Your Cart");
  // await expect(page.locator(".xoo-wsc-pname")).toHaveText(booksName[0]);
  // await expect(page.locator(".xoo-wscb-count")).toHaveText("1");
  // await expect(page.locator(".xoo-wsc-ft-amt bdi")).toHaveText("382 ฿");
  // await page.goBack();
  // await page.locator("#post-989").click();
  // await page.locator("button.single_add_to_cart_button").click({ delay: 500 });
  // await expect(page.locator(".xoo-wscb-count")).toHaveText("2");

  // const countBooks = await page.locator(".xoo-wsc-pname").count();
  // for (let i = 0; i < countBooks; ++i) {
  //   const title = page.locator(".xoo-wsc-pname").nth(i);
  //   await expect(title).toHaveText(booksName[i]);
  //   // console.log(booksName[i]);
  // }
  // await expect(page.locator(".xoo-wsc-ft-amt bdi")).toHaveText("782 ฿");

  // for (let i = 0; i < countBooks; ++i) {
  //   if (
  //     (await page.locator(".xoo-wsc-pname").nth(i).textContent()) ===
  //     booksName[0]
  //   ) {
  //     await page.locator(".xoo-wsc-icon-trash").nth(i).click();
  //     break;
  //   }
  // }

  // await expect(page.locator(".xoo-wsc-ft-amt bdi")).toHaveText("400 ฿");
  // await expect(page.locator(".xoo-wscb-count")).toHaveText("1");
  // await page.locator(".xoo-wsc-ft-btn-cart").click();
  // const amount = page.locator("[data-title*='มูลค่า']");
  // await expect(amount).toHaveText("400 ฿");
  await page.locator("#menu-1-18869fb .menu-item-2778").click();

  await page.locator(".wpforms-submit ").click()
  //expect...
  await page.locator("#wpforms-2869-field_1").fill("Playwright")
  await page.locator(".wpforms-submit ").click()
  //expect...
  await page.locator("#wpforms-2869-field_1-last").fill("Test")
  await page.locator(".wpforms-submit ").click()
  //expect...
  await page.locator("#wpforms-2869-field_3").fill("123456")
  await page.locator(".wpforms-submit ").click()
  //expect...
  await page.locator("#wpforms-2869-field_2").fill("400")
  await page.locator(".wpforms-submit ").click()
  //expect...

  await page.locator("#wpforms-2869-field_4").click()
  await page.locator(".flatpickr-day.today").click()
  await page.locator(".wpforms-submit ").click()

  await page.locator("#wpforms-2869-field_4-time").click()
  await page.locator("text=15:15").click()
  await page.locator(".wpforms-submit ").click()
  //expect...

  await page.setInputFiles("input[type='file']","./assets/dummy.jpg")
  await page.locator(".wpforms-submit ").click()
  expect(page.locator("#wpforms-confirmation-2869")).toHaveText("แจ้งชำระเงินเรียบร้อยแล้ว")
  //expect... 
  await page.pause();
});
