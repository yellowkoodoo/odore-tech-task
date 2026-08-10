import { test, expect } from "@fixtures/appFixture";

import { standardUser } from "../framework/resources/Users";
import URLs from "../framework/constants/pageUrls";
import { MenuItems } from "../framework/enums/pages";

test.describe("Login tests", () => {
    test("Successful login, logout, re-login sequence", async ({
        appNoUser
    }) => {
        await appNoUser.PAGES.login.navigate();
        await appNoUser.PAGES.login.loginAs(standardUser);
        expect(appNoUser.PAGES.inventory.page.url()).toContain(URLs.Inventory);

        await appNoUser.PAGES.topBar.openMenu();
        await appNoUser.PAGES.topBar.menu.select(MenuItems.Logout);
        expect(appNoUser.PAGES.login.loginForm).toBeVisible();

        await appNoUser.PAGES.login.loginAs(standardUser);
        expect(appNoUser.PAGES.inventory.page.url()).toContain(URLs.Inventory);
    });
});
