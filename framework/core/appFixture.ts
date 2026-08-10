import { test as base, Page } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import TopBar from "../pages/TopBar";
import InventoryPage from "../pages/InventoryPage";
import CartPage from "../pages/CartPage";

import { standardUser } from "../resources/Users";

export { expect } from "@playwright/test";

type Pages = {
    login: LoginPage;
    topBar: TopBar;
    inventory: InventoryPage;
    cart: CartPage;
};

type Flows = {
    // checkout: CheckoutFlow;
};

type App = {
    page: Page;
    PAGES: Pages;
    FLOWS: Flows;
};

type Fixtures = {
    appNoUser: App;
    appWithUser: App;
};

const buildApp = (page: Page): App => ({
    page,
    PAGES: {
        login: new LoginPage(page),
        topBar: new TopBar(page),
        inventory: new InventoryPage(page),
        cart: new CartPage(page)
    },
    FLOWS: {
        // checkout: new CheckoutFlow(PAGES),
    }
});

export const test = base.extend<Fixtures>({
    appNoUser: async ({ page }, use) => {
        const app = buildApp(page);
        await use(app);
    },

    appWithUser: async ({ page }, use) => {
        const app = buildApp(page);
        await app.PAGES.login.navigate();
        await app.PAGES.login.loginAs(standardUser);
        await use(app);
    }
});
