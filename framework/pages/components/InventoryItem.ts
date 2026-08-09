import BasePage from "../base/ItemsBase";

export default class InventoryItem extends BasePage {
    async addToCart(item: string) {
        await this.itemAction(item, "Add to cart");
    }
}
