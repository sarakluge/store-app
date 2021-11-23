export type StackScreens = {
    ProductListScreen: undefined,
    AddAndEditScreen: {product: Product} | undefined, 
}

export type Product = {
    id: string;
    name: string;
    type: string;
    price: string;
  };