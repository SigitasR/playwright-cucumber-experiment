import { BasePage } from './BasePage';
import { Page } from 'playwright';

export class FrontPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }
}
