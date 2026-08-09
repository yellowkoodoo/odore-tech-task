import BasePage from "./BasePage";

export default class ItemsBase extends BasePage {
    async getPrice(item: string) {
        return await this.getItem(item)
            .getByTestId("inventory-item-price")
            .textContent();
    }

    protected async itemAction(item: string, action: string) {
        await this.getItem(item).getByText(action).click();
    }

    private getItem(item: string) {
        return this.getByTestId("inventory-item", {
            inner: "inventory-item-name",
            text: item
        });
    }
}
