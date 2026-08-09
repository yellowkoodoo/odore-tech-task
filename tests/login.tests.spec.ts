import { test, expect } from "@fixtures/appFixture";

import { standardUser } from "../framework/resources/Users";
import URLs from "../framework/constants/pageUrls";
import { MenuItems } from "../framework/enums/pages";

test.describe("Login tests", () => {
    test("Successful login, logout, re-login sequence", async ({
        appNoUser
    }) => {
        await appNoUser.login.navigate();
        await appNoUser.login.loginAs(standardUser);
        expect(appNoUser.inventory.page.url()).toContain(URLs.Inventory);

        await appNoUser.topBar.openMenu();
        await appNoUser.topBar.menu.select(MenuItems.Logout);
        expect(appNoUser.login.loginForm).toBeVisible();

        await appNoUser.login.loginAs(standardUser);
        expect(appNoUser.inventory.page.url()).toContain(URLs.Inventory);
    });
});
