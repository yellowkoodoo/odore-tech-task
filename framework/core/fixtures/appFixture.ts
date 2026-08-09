import { test as base, Page } from "@playwright/test";
import LoginPage from "../../pages/LoginPage";
import TopBar from "../../pages/TopBar";
import InventoryPage from "../../pages/InventoryPage";
import CartPage from "../../pages/CartPage";

import { standardUser } from "../../resources/users";

type App = {
    page: Page;
    login: LoginPage;
    topBar: TopBar;
    inventory: InventoryPage;
    cart: CartPage;
};

type Fixtures = {
    appNoUser: App;
    appWithUser: App;
};

export { expect } from "@playwright/test";

const buildApp = (page: Page): App => ({
    page,
    login: new LoginPage(page),
    topBar: new TopBar(page),
    inventory: new InventoryPage(page),
    cart: new CartPage(page)
});

export const test = base.extend<Fixtures>({
    appNoUser: async ({ page }, use) => {
        await use(buildApp(page));
    },

    appWithUser: async ({ page }, use) => {
        const app = buildApp(page);
        await app.login.navigate();
        await app.login.loginAs(standardUser);
        await use(app);
    }
});
