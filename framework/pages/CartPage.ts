import BasePage from "./base/BasePage";
import CartItem from "./components/CartItem";

import { CartPageButtons } from "../enums/pages";

export default class CartPage extends BasePage {
    private get continueShoppingButton() {
        return this.getByTestId(CartPageButtons.ContinueShopping);
    }
    private get checkoutButton() {
        return this.getByTestId(CartPageButtons.Checkout);
    }

    get items() {
        return new CartItem(this.page);
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}
