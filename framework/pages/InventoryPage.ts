import BasePage from "./base/BasePage";
import InventoryItem from "./components/InventoryItem";

import { InventoryPageControls } from "../enums/pages";
import URLs from "../constants/pageUrls";

export default class InventoryPage extends BasePage {
    protected URL = URLs.Inventory;

    private readonly sortingSelect = this.page.getByTestId(
        InventoryPageControls.SortingSelect
    );

    get items() {
        return new InventoryItem(this.page);
    }
}
