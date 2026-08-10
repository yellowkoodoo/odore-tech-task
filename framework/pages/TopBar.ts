import BasePage from "./base/BasePage";
import BurgerMenu from "./components/BurgerMenu";

import { TopBarControls } from "../enums/pages";

export default class TopBar extends BasePage {
    get cartItems() {
        return this.getByTestId(TopBarControls.CartItems);
    }
    private get menuIcon() {
        return this.getByTestId(TopBarControls.Menu);
    }
    private get cartIcon() {
        return this.getByTestId(TopBarControls.Cart);
    }

    get menu() {
        return new BurgerMenu(this.page);
    }

    async openMenu() {
        await this.getParentOf(this.menuIcon).click();
    }

    async openCart() {
        await this.getParentOf(this.cartIcon).click();
    }
}
