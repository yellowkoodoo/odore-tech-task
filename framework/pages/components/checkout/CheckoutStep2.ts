import BasePage from "../../base/BasePage";
import CartItem from "../../components/CartItem";

import {
    CheckoutStep2Buttons,
    CheckoutStep2Labels
} from "../../../enums/pages";

export default class Step2 extends BasePage {
    private get subtotal() {
        return this.getByTestId(CheckoutStep2Labels.Subtotal);
    }
    private get tax() {
        return this.getByTestId(CheckoutStep2Labels.Tax);
    }
    private get total() {
        return this.getByTestId(CheckoutStep2Labels.Total);
    }
    private get finishButton() {
        return this.getByTestId(CheckoutStep2Buttons.Finish);
    }
    private get cancelButton() {
        return this.getByTestId(CheckoutStep2Buttons.Cancel);
    }

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
