import { Locator, Page } from "@playwright/test";
import URLs from "../../constants/pageUrls";

export default class BasePage {
    protected URL = URLs.BASE;

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto(this.URL);
    }

    protected async checkSuccessfulLoad() {
        await this.page.waitForLoadState("load");
        await this.page.waitForLoadState("networkidle");
    }

    protected getByTestId(
        id: string,
        options?: { inner: string; text: string }
    ) {
        const locator = this.page.getByTestId(id);

        if (!options) return locator;

        return locator.filter({
            has: this.page
                .getByTestId(options.inner)
                .filter({ hasText: options.text })
        });
    }

    protected getParentOf(locator: Locator) {
        return locator.locator("..");
    }
}
