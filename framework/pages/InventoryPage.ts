import BasePage from "./base/BasePage";
import InventoryItem from "./components/InventoryItem";

import { InventoryPageControls, SortingOptions } from "../enums/pages";
import URLs from "../constants/pageUrls";

export default class InventoryPage extends BasePage {
    protected URL = URLs.Inventory;

    private get sortingSelect() {
        return this.getByTestId(InventoryPageControls.SortingSelect);
    }

    get items() {
        return new InventoryItem(this.page);
    }

    async sortBy(option: SortingOptions) {
        await this.sortingSelect.selectOption({ label: option });
    }
}
