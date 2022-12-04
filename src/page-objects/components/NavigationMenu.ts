import { Locator, Page } from '@playwright/test';

export class NavigationMenu {
    private navigationMenu: Locator;
    constructor(private readonly page: Page) {
        this.navigationMenu = this.page.locator('div#js-HeaderV3__nav');
    }

    clickNavigationLinkByText = async (menuText: string) => {
        await this.navigationMenu.locator(`a[data-ga-slug="${menuText}"]`).click();
    };
}
