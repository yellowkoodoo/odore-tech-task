import BasePage from "./base/BasePage";
import InventoryItem from "./components/InventoryItem";

export default class InventoryPage extends BasePage {
    private readonly sortingSelect = this.page.getByTestId(
        "product-sort-container"
    );

    get items() {
        return new InventoryItem(this.page);
    }
}
