import BasePage from "../base/BasePage";

export enum MenuItems {
    AllItems = "inventory-sidebar-link",
    About = "about-sidebar-link",
    Logout = "logout-sidebar-link",
    ResetAppState = "reset-sidebar-link",
    Close = "close-menu"
}

export default class BurgerMenu extends BasePage {
    async select(menu: MenuItems) {
        await this.getByTestId(menu).click;
    }

    async close() {
        await this.getParentOf(this.getByTestId(MenuItems.Close)).click();
    }
}
