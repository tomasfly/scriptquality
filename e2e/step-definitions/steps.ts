import {Given, When, Then} from '@wdio/cucumber-framework';
import {expect, $} from '@wdio/globals';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
// import {strict as assert} from 'node:assert';

Given(/^I am on the (\w+) page$/, async page => {
  console.log(page);
  console.log('yay');
  const selector = 'new UiSelector().className("android.widget.ImageView")';
  await $(`android=${selector}`).waitForDisplayed();
  // assert.strictEqual(true, await myvar.isDisplayed());
  // expect(myvar).toBeDisplayed();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async message => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
