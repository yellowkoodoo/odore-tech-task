import { test, expect } from "@fixtures/appFixture";

import { Inventory } from "../framework/resources/Inventory";
import { SortingOptions } from "../framework/enums/pages";

test.describe("Inventory tests", () => {
    const sort = [
        { order: SortingOptions.NameAZ },
        { order: SortingOptions.NameZA }
    ];

    for (const { order } of sort) {
        test(`Should sort Inventory page by ${order}`, async ({
            appWithUser
        }) => {
            const expectedInventory = Object.values(Inventory);
            if (order === SortingOptions.NameAZ) {
                expectedInventory.sort((a, b) => a.localeCompare(b));
            }
            if (order === SortingOptions.NameZA) {
                expectedInventory.sort((a, b) => b.localeCompare(a));
            }

            await appWithUser.PAGES.inventory.sortBy(order);
            const actualOrder =
                await appWithUser.PAGES.inventory.items.getAllItems();
            expect(actualOrder).toEqual(expectedInventory);
        });
    }

    const items = [
        { item: Inventory.Backpack, expected: "$29.99" },
        { item: Inventory.TShirt, expected: "$15.99" },
        { item: Inventory.Onesie, expected: "$7.99" },
        { item: Inventory.BikeLight, expected: "$9.99" },
        { item: Inventory.Jacket, expected: "$49.99" },
        { item: Inventory.TShirtRed, expected: "$15.99" }
    ];

    for (const { item, expected } of items) {
        test(`Should display correct price for ${item}`, async ({
            appWithUser
        }) => {
            const priceActual =
                await appWithUser.PAGES.inventory.items.getPrice(item);
            expect(priceActual).toBe(expected);
        });
    }
});
