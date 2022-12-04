import { Given, setDefaultTimeout, setWorldConstructor, Then, When } from '@cucumber/cucumber';
import { CustomWorld } from '../support/CustomWorld';

setWorldConstructor(CustomWorld);
setDefaultTimeout(30000);

Given('I navigate to {string}', async function (this: CustomWorld, url) {
    await this.webApp?.open(url);
});

When('I click on {string} link', async function (this: CustomWorld, linkText: string) {
    await this.webApp?.front.navigationMenu.clickNavigationLinkByText(linkText);
});

Then('I should see price table', async function (this: CustomWorld) {
    await this.webApp?.pricing.expectPricePillNavigationToBeVisible();
});
