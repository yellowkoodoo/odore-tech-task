import { test, expect } from "@fixtures/appFixture";

import { Inventory } from "../framework/resources/Inventory";

test.describe("Cart tests", () => {
    test(`Should keep items in Cart after reload`, async ({ appWithUser }) => {
        const addedItems = [Inventory.Backpack];

        for (const item of addedItems) {
            await appWithUser.PAGES.inventory.items.addToCart(item);
        }

        await appWithUser.PAGES.topBar.openCart();
        await appWithUser.page.reload();

        const itemsInCart = await appWithUser.PAGES.cart.items.getAllItems();
        expect(itemsInCart).toEqual(addedItems);
        expect(await appWithUser.PAGES.topBar.cartItems.textContent()).toEqual(
            String(addedItems.length)
        );
    });

    test(`Should forbid checkout with an empty cart - BUG #2`, async ({
        appWithUser
    }) => {
        await appWithUser.PAGES.topBar.openCart();
        expect(await appWithUser.PAGES.cart.checkoutButton).toBeDisabled();
    });
});
