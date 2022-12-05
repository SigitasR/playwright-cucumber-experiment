import { FrontPage } from './FrontPage';
import { PricingPage } from './PricingPage';
import { Page } from 'playwright';
import { expect } from 'chai';

export class WebApp {
    front: FrontPage;
    pricing: PricingPage;

    constructor(private readonly page: Page) {
        this.front = new FrontPage(this.page);
        this.pricing = new PricingPage(this.page);
    }

    async open(url: string) {
        await this.page.goto(url);
        await this.page.waitForLoadState('domcontentloaded');
    }

    expectAppUrlToContain(expected: string) {
        const url = this.page.url();
        expect(url, `Expecting ${url} to contain ${expected}`).to.contain(expected);
    }
}
