import BasePage from "./base/BasePage";
import CartItem from "./components/CartItem";

import { CartPageButtons } from "../enums/pages";

export default class CartPage extends BasePage {
    private readonly continueShoppingButton = this.getByTestId(
        CartPageButtons.ContinueShopping
    );
    private readonly checkoutButton = this.getByTestId(
        CartPageButtons.Checkout
    );

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
