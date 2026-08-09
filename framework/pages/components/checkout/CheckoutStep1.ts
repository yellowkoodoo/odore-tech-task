import BasePage from "../../base/BasePage";
import { CheckoutData } from "../../../types/CheckoutData";

export enum Inputs {
    FirstName = "firstName",
    LastName = "lastName",
    PostalCode = "postalCode"
}

export enum Buttons {
    Continue = "continue",
    Cancel = "cancel"
}

export default class Step1 extends BasePage {
    private readonly firstName = this.getByTestId(Inputs.FirstName);
    private readonly lastName = this.getByTestId(Inputs.LastName);
    private readonly postalCode = this.getByTestId(Inputs.PostalCode);

    private readonly continueButton = this.getByTestId(Buttons.Continue);
    private readonly cancelButton = this.getByTestId(Buttons.Cancel);

    async fillData(data: CheckoutData) {
        await this.enterFirstName(data.FirstName);
        await this.enterLastName(data.LastName);
        await this.enterPostalCode(data.PostalCode);
    }

    async continue() {
        await this.continueButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    private async enterFirstName(firstName: string) {
        await this.firstName.fill(firstName);
    }

    private async enterLastName(lastName: string) {
        await this.lastName.fill(lastName);
    }

    private async enterPostalCode(postalCode: string) {
        await this.postalCode.fill(postalCode);
    }
}
