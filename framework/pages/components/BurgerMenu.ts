import BasePage from "../base/BasePage";

import { MenuItems } from "../../enums/pages";

export default class BurgerMenu extends BasePage {
    async select(menu: MenuItems) {
        await this.getByTestId(menu).click;
    }

    async close() {
        await this.getParentOf(this.getByTestId(MenuItems.Close)).click();
    }
}
