import { NavigationMenu } from './components/NavigationMenu';
import { Page } from 'playwright';

export class BasePage {
    navigationMenu: NavigationMenu;

    constructor(protected readonly page: Page) {
        this.navigationMenu = new NavigationMenu(this.page);
    }
}
