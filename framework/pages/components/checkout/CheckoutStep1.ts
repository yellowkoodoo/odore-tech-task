import BasePage from "../../base/BasePage";
import { UserCheckoutData } from "../../../types/UserCheckoutData";

import {
    CheckoutStep1Inputs,
    CheckoutStep1Buttons
} from "../../../enums/pages";

export default class Step1 extends BasePage {
    private get firstName() {
        return this.getByTestId(CheckoutStep1Inputs.FirstName);
    }
    private get lastName() {
        return this.getByTestId(CheckoutStep1Inputs.LastName);
    }
    private get postalCode() {
        return this.getByTestId(CheckoutStep1Inputs.PostalCode);
    }
    private get continueButton() {
        return this.getByTestId(CheckoutStep1Buttons.Continue);
    }
    private get cancelButton() {
        return this.getByTestId(CheckoutStep1Buttons.Cancel);
    }

    async fillData(data: UserCheckoutData) {
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
