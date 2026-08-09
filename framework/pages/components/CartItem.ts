import BasePage from "../base/ItemsBase";

export default class CartItem extends BasePage {
    async remove(item: string) {
        await this.itemAction(item, "Remove");
    }
}
