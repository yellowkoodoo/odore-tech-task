import BasePage from "../../base/BasePage";

import { CheckoutCompletePageButtons } from "../../../enums/pages";

export default class SuccessPage extends BasePage {
    readonly titleText = this.getByTestId("title");

    private readonly backHomeButton = this.getByTestId(
        CheckoutCompletePageButtons.BackHome
    );
    private readonly generatePDFButton = this.getByTestId(
        CheckoutCompletePageButtons.GeneratePDF
    );

    async backHome() {
        await this.backHomeButton.click();
    }

    async generatePDF() {
        await this.generatePDFButton.click();
    }
}
