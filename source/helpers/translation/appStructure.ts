enum ProductListScreen {
    EmptyListString = "empty-list-string",
    HeaderString = "header-string",
    NameLabel = "name-label",
    TypeLabel = "type-label",
    PriceLabel = "price-label",
}

enum AddAndEditScreen {
    AddHeader = "add-header",
    EditHeader = "edit-header",
    NamePlaceholder = "name-placeholder",
    PricePlaceholder = "price-placeholder",
    TypeTitle = "type-title",
    Peripheral = "peripheral",
    Integrated = "integrated",
    SaveBtnLabel = "save-btn-label",
    CancelBtnLabel = "cancel-btn-label",
    DeleteBtnLabel = "delete-btn-label",
}

export const tokens = {
    screens: {
        productListScreen: ProductListScreen,
        addAndEditScreen: AddAndEditScreen,
    }
}