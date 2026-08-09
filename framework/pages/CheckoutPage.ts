import BasePage from "./base/BasePage";
import Step1 from "./components/checkout/CheckoutStep1";
import Step2 from "./components/checkout/CheckoutStep2";
import ResultStep from "./components/checkout/SuccessPage";

export enum Buttons {
    ContinueShopping = "continue-shopping",
    Checkout = "checkout"
}

export default class CheckoutPage extends BasePage {
    private readonly continueShoppingButton = this.getByTestId(
        Buttons.ContinueShopping
    );
    private readonly checkoutButton = this.getByTestId(Buttons.Checkout);

    get step1() {
        return new Step1(this.page);
    }

    get step2() {
        return new Step2(this.page);
    }

    get stepResult() {
        return new ResultStep(this.page);
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}
