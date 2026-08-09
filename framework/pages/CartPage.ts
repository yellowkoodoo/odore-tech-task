import BasePage from "./base/BasePage";
import CartItem from "./components/CartItem";

export enum Buttons {
    ContinueShopping = "continue-shopping",
    Checkout = "checkout"
}

export default class CartPage extends BasePage {
    private readonly continueShoppingButton = this.getByTestId(
        Buttons.ContinueShopping
    );
    private readonly checkoutButton = this.getByTestId(Buttons.Checkout);

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
