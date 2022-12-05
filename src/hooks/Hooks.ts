import { After, Before } from '@cucumber/cucumber';
import { CustomWorld } from '../support/CustomWorld';
import * as fs from 'fs';

Before(async function (this: CustomWorld) {
    await this.init();
});

After(async function (this: CustomWorld) {
    const path = (await this.page?.video()?.path()) || '';
    await this.closeBrowser();
    await this.step('Attach video', async function () {
        await this.attach(fs.readFileSync(path), 'video/webm');
    });
});
