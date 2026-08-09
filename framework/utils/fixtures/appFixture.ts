import { test as base, Page } from "@playwright/test";
import LoginPage from "../../pages/LoginPage";
import TopBar from "../../pages/TopBar";
import InventoryPage from "../../pages/InventoryPage";
import CartPage from "../../pages/CartPage";

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

export const test = base.extend<{ app: App }>({
    app: async ({ page }, use) => {
        const app: App = {
            page,
            login: new LoginPage(page),
            topBar: new TopBar(page),
            inventory: new InventoryPage(page),
            cart: new CartPage(page)
        };
        await use(app);
    }
});
