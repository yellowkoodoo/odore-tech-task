export enum LoginControls {
    UserNameInput = "username",
    PasswordInput = "password",
    LoginButton = "login-button"
}

export enum LoginPageElements {
    Form = "login-container",
    Error = "error"
}

export enum TopBarControls {
    Menu = "open-menu",
    Cart = "shopping-cart-link"
}

export enum MenuItems {
    AllItems = "inventory-sidebar-link",
    About = "about-sidebar-link",
    Logout = "logout-sidebar-link",
    ResetAppState = "reset-sidebar-link",
    Close = "close-menu"
}

export enum InventoryPageControls {
    SortingSelect = "product-sort-container"
}

export enum InventoryItemFields {
    ItemRoot = "inventory-item",
    Price = "inventory-item-price",
    Name = "inventory-item-name"
}

export enum CartPageButtons {
    ContinueShopping = "continue-shopping",
    Checkout = "checkout"
}

export enum CheckoutButtons {
    ContinueShopping = "continue-shopping",
    Checkout = "checkout"
}

export enum CheckoutStep1Inputs {
    FirstName = "firstName",
    LastName = "lastName",
    PostalCode = "postalCode"
}

export enum CheckoutStep1Buttons {
    Continue = "continue",
    Cancel = "cancel"
}

export enum CheckoutStep2Labels {
    Subtotal = "subtotal-label",
    Tax = "tax-label",
    Total = "total-label"
}

export enum CheckoutStep2Buttons {
    Finish = "finish",
    Cancel = "cancel"
}

export enum CheckoutCompletePageButtons {
    BackHome = "back-to-products",
    GeneratePDF = "generate-pdf-order"
}
