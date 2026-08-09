import BasePage from "../../base/BasePage";
import CartItem from "../../components/CartItem";

import { CheckoutStep2Buttons } from "../../../enums/pages";

export default class Step2 extends BasePage {
    private readonly subtotal = this.getByTestId("subtotal-label");
    private readonly tax = this.getByTestId("tax-label");
    private readonly total = this.getByTestId("total-label");

    private readonly finishButton = this.getByTestId(
        CheckoutStep2Buttons.Finish
    );
    private readonly cancelButton = this.getByTestId(
        CheckoutStep2Buttons.Cancel
    );

    get items() {
        return new CartItem(this.page);
    }

    async finish() {
        await this.finishButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }
}
