import BasePage from "../../base/BasePage";
import { CheckoutData } from "../../../types/CheckoutData";

export enum Buttons {
    BackHome = "back-to-products",
    GeneratePDF = "generate-pdf-order"
}

export default class SuccessPage extends BasePage {
    readonly titleText = this.getByTestId("title");

    private readonly backHomeButton = this.getByTestId(Buttons.BackHome);
    private readonly generatePDFButton = this.getByTestId(Buttons.GeneratePDF);

    async backHome() {
        await this.backHomeButton.click();
    }

    async generatePDF() {
        await this.generatePDFButton.click();
    }
}
