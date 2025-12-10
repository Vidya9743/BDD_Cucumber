
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

When('User Clicks on login Button', async function () {
  await page.locator('//button[@type="submit"]').click();
});


Given('User lunch the application.', async function () {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { timeout: 60000 });
});
Given('user lunch the application.', async function () {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { timeout: 60000 });
});
Given('user launch the application.', async function () {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { timeout: 60000 });
});
When('User Enter username as {string} and password as {string}.', async function (username, password) {
  await page.locator('//input[@name="username"]').fill(username);
  await page.locator('//input[@name="password"]').fill(password);
});
When('User Enter username as {string} and password as {string}', async function (username, password) {
  await page.locator('//input[@name="username"]').fill(username);
  await page.locator('//input[@name="password"]').fill(password);
});
When('User Clicks on login Button.', async function () {
  await page.locator('//button[@type="submit"]').click();
});
When('User Click on login Button', async function () {
  await page.locator('//button[@type="submit"]').click();
});
Then('User should Navigated to Dashboard Page', async function () {
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});

Then('User should get login Error Message', async function () {
    await expect(page.locator('text="Invalid credentials"')).toBeVisible();
});