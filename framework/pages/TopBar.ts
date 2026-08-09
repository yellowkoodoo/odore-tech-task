import BasePage from "./base/BasePage";
import BurgerMenu from "./components/BurgerMenu";

export enum Items {
    Menu = "open-menu",
    Cart = "shopping-cart-link"
}

export default class TopBar extends BasePage {
    private readonly menuIcon = this.getByTestId(Items.Menu);
    private readonly cartIcon = this.getByTestId(Items.Cart);

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
