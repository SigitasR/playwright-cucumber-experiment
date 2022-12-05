import { Given, setDefaultTimeout, setWorldConstructor, Then, When } from '@cucumber/cucumber';
import { CustomWorld } from '../support/CustomWorld';

setWorldConstructor(CustomWorld);
setDefaultTimeout(30000);

Given('I navigate to {string}', async function (this: CustomWorld, url) {
    await this.step('Navigation step', async function () {});
    await this.webApp?.open(url);
});

When('I click on {string} link', async function (this: CustomWorld, linkText: string) {
    await this.step(`Click link "${linkText}" step`, async function () {});
    await this.webApp?.front.navigationMenu.clickNavigationLinkByText(linkText);
});

Then('I should see price table', async function (this: CustomWorld) {
    await this.step('Check price table step', async function () {});
    await this.webApp?.pricing.expectPricePillNavigationToBeVisible();
});
Then('page URL should contain {string}', async function (this: CustomWorld, urlPart: string) {
    await this.step('Check url step', async function () {});
    this.webApp?.expectAppUrlToContain(urlPart);
});
