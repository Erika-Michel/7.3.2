const { chromium } = require("playwright");
const user = require("../playwright/user.js");
const { test, expect } = require("@playwright/test");
let email = user.email;
let password = user.password;

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.fill('[placeholder="Email"]', email);
  await page.fill('[placeholder="Пароль"]', password);
  await page.click('text=Войти');
  await expect(page).toHaveURL("https://netology.ru/profile");
  await browser.close();
})();
