const { chromium } = require("playwright");
const user = require("./user.js");
let email = user.email;
let password = user.password;

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true,
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.fill('[placeholder="Email"]', email);
  await page.fill('[placeholder="Пароль"]', password);
  await page.click('button:has-text("Войти")');

  const check = await page.waitForSelector("text=Мои курсы и профессии");
  await browser.close();
})();

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true,
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.fill('[placeholder="Email"]', "test@gmail.com");
  await page.fill('[placeholder="Пароль"]', password);
  await page.click('button:has-text("Войти")');

  const check = await page.waitForSelector("text=Неверный email");
  await browser.close();
})();
