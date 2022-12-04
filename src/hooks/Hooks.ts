import { After, Before } from '@cucumber/cucumber';
import { CustomWorld } from '../support/CustomWorld';

Before(async function (this: CustomWorld) {
    await this.init();
});

After(async function (this: CustomWorld) {
    await this.closeBrowser();
});
