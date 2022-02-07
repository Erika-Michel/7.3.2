const { test, expect } = require("@playwright/test");
const { chromium } = require("playwright");
const { email, password } = require("../user.js");

test("Should authorize successfully", async ({ page }) => {
  await page.goto("https://netology.ru/");
  await page.click("text=Войти");
  await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");
  await page.fill('[placeholder="Email"]', email);
  await page.fill('[placeholder="Пароль"]', password);
  await page.click("text=Войти");

  await expect(page.locator("text=Мои курсы и профессии")).toBeVisible();
});

test("Should not authorize", async ({ page }) => {
  await page.goto("https://netology.ru/");
  await page.click("text=Войти");
  await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");
  await page.fill('[placeholder="Email"]', "testemail@gmail.com");
  await page.fill('[placeholder="Пароль"]', password);
  await page.click("text=Войти");

  await expect(
    page.locator("text=Вы ввели неправильно логин или пароль")
  ).toBeVisible();
});
