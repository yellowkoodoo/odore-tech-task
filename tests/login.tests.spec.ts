import { test, expect } from "@fixtures/appFixture";

import URLs from "../framework/constants/pageUrls";
import AppConstants from "../framework/constants/app";
import { standardUser } from "../framework/resources/Users";
import { MenuItems } from "../framework/enums/pages";
import { UserAuthData } from "../framework/types/UserAuthData";
import { generateAuthData } from "../framework/utils/generator.user.data";

test.describe("Login tests", () => {
    test("Successful login, logout, re-login sequence", async ({
        appNoUser,
        baseURL
    }) => {
        const expectedURL = new URL(URLs.Inventory, baseURL).href;

        await appNoUser.PAGES.login.navigate();
        await appNoUser.PAGES.login.loginAs(standardUser);
        expect(appNoUser.page.url()).toBe(expectedURL);

        await appNoUser.PAGES.topBar.openMenu();
        await appNoUser.PAGES.topBar.menu.select(MenuItems.Logout);
        expect(appNoUser.PAGES.login.loginForm).toBeVisible();

        await appNoUser.PAGES.login.loginAs(standardUser);
        expect(appNoUser.page.url()).toBe(expectedURL);
    });

    test("Failed login, incorrect password", async ({ appNoUser, baseURL }) => {
        const userWithWrongPassword: UserAuthData = generateAuthData();
        userWithWrongPassword.UserName = standardUser.UserName;

        const expectedURL = new URL(String(baseURL)).href;

        await appNoUser.PAGES.login.navigate();
        await appNoUser.PAGES.login.loginAs(userWithWrongPassword);

        expect(appNoUser.page.url()).toBe(expectedURL);
        expect(appNoUser.PAGES.login.loginForm).toBeVisible();
        expect(appNoUser.PAGES.login.error).toHaveText(AppConstants.auth_error);
    });
});
