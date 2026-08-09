import BasePage from "./BasePage";

import { InventoryItemFields, CheckoutStep1Buttons } from "../../enums/pages";

export default class ItemsBase extends BasePage {
    async getPrice(item: string) {
        return await this.getItem(item)
            .getByTestId(InventoryItemFields.Price)
            .textContent();
    }

    protected async itemAction(item: string, action: string) {
        await this.getItem(item).getByText(action).click();
    }

    private getItem(item: string) {
        return this.getByTestId(InventoryItemFields.ItemRoot, {
            inner: InventoryItemFields.Name,
            text: item
        });
    }
}
