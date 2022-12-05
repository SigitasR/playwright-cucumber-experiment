import { Browser, BrowserContext, chromium, Page } from '@playwright/test';
import { IWorldOptions, World } from '@cucumber/cucumber';
import { WebApp } from '../page-objects/WebApp';

export class CustomWorld extends World {
    browser?: Browser;
    context?: BrowserContext;
    page?: Page;
    webApp?: WebApp;

    [key: string]: any;

    constructor(options: IWorldOptions) {
        super(options);
    }

    async init() {
        await this.initBrowser();
        await this.initWebApp();
    }

    async initBrowser() {
        this.browser = await chromium.launch({ headless: false });
        this.context = await this.browser.newContext({
            recordVideo: { dir: 'videos/' },
        });
        this.page = await this.context.newPage();
    }

    async initWebApp() {
        if (this.page) {
            this.webApp = new WebApp(this.page);
            return;
        }
        throw new Error('CustomWorld.initWebApp() must be called after CustomWorld.initBrowser()');
    }

    async closeBrowser() {
        await this.context?.close();
        await this.browser?.close();
    }
}
