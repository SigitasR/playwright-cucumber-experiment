import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class PricingPage extends BasePage {
    private pricePillNavigation: Locator;

    constructor(page: Page) {
        super(page);
        this.pricePillNavigation = this.page.locator('div.PillNavigation__tabs');
    }

    expectPricePillNavigationToBeVisible = async () => {
        await expect(this.pricePillNavigation).toBeVisible();
    };
}
