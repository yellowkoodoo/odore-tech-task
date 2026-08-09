import BasePage from "./base/BasePage";
import BurgerMenu from "./components/BurgerMenu";

import { TopBarControls } from "../enums/pages";

export default class TopBar extends BasePage {
    private readonly menuIcon = this.getByTestId(TopBarControls.Menu);
    private readonly cartIcon = this.getByTestId(TopBarControls.Cart);

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
