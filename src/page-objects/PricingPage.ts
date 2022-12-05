import { Locator, Page } from 'playwright';
import { BasePage } from './BasePage';
import { expect } from 'chai';

export class PricingPage extends BasePage {
    private pricePillNavigation: Locator;

    constructor(page: Page) {
        super(page);
        this.pricePillNavigation = this.page.locator('div.PillNavigation__tabs');
    }

    expectPricePillNavigationToBeVisible = async () => {
        expect(await this.pricePillNavigation.isVisible(), 'Expecting price navigation to be visible').to.be.false;
    };
}
