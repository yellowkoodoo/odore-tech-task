import BasePage from "./base/BasePage";
import { User } from "../types/User";

export enum LoginControls {
    UserNameInput = "username",
    PasswordInput = "password",
    LoginButton = "login-button"
}

export default class LoginPage extends BasePage {
    private readonly userName = this.getByTestId(LoginControls.UserNameInput);
    private readonly password = this.getByTestId(LoginControls.PasswordInput);
    private readonly loginButton = this.getByTestId(LoginControls.LoginButton);

    async loginAs(user: User) {
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
