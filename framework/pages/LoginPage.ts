import BasePage from "./base/BasePage";
import { UserAuthData } from "../types/UserAuthData";

import { LoginControls, LoginPageElements } from "../enums/pages";

export default class LoginPage extends BasePage {
    get loginForm() {
        return this.getByTestId(LoginPageElements.Form);
    }
    private get userName() {
        return this.getByTestId(LoginControls.UserNameInput);
    }
    private get password() {
        return this.getByTestId(LoginControls.PasswordInput);
    }
    private get loginButton() {
        return this.getByTestId(LoginControls.LoginButton);
    }

    async loginAs(user: UserAuthData) {
        await this.enterUserName(user.UserName);
        await this.enterPassword(user.Password);
        await this.clickLogin();
    }

    private async enterUserName(firstName: string) {
        await this.userName.fill(firstName);
    }

    private async enterPassword(password: string) {
        await this.password.fill(password);
    }

    private async clickLogin() {
        await this.loginButton.click();
    }
}
