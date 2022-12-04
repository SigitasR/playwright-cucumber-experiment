import { FrontPage } from './FrontPage';
import { PricingPage } from './PricingPage';
import { Page } from '@playwright/test';

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
}
