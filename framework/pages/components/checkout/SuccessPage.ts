import BasePage from "../../base/BasePage";

import { CheckoutCompletePageButtons } from "../../../enums/pages";

export default class SuccessPage extends BasePage {
    get titleText() {
        return this.getByTestId("title");
    }
    private get backHomeButton() {
        return this.getByTestId(CheckoutCompletePageButtons.BackHome);
    }
    private get generatePDFButton() {
        return this.getByTestId(CheckoutCompletePageButtons.GeneratePDF);
    }

    async backHome() {
        await this.backHomeButton.click();
    }

    async generatePDF() {
        await this.generatePDFButton.click();
    }
}
