const { chromium } = require("playwright");
const { user } = require("../playwright/user.js");
const { test, expect } = require("@playwright/test");
//let email = user.email;
//let password = user.password;

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 3000,
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.fill('[placeholder="Email"]', user.email);
  await page.fill('[placeholder="Пароль"]', user.password);
  await page.click("text=Войти");
  await expect(page).toHaveURL("https://netology.ru/profile");
  await browser.close();
})();

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 3000,
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.fill('[placeholder="Email"]', "test@gmail.com");
  await page.fill('[placeholder="Пароль"]', "Pass123!!");
  await page.click("text=Войти");
  await page.click('button:has-text("Войти")');
  await expect(
    page.locator("text=Вы ввели неправильно логин или пароль")
  ).toBeVisible();
  await browser.close();
})();
