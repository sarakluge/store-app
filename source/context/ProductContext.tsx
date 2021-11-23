import React, { useState } from "react";
import { Product } from "../helpers/types";

interface IProduct {
  id: string;
  name: string;
  type: string;
  price: string;
}

type ContextType = {
  productList: Product[];
  saveProduct: (product: Product) => void;
  editProduct: (id: string, name: string, price: string, type: string) => void;
  deleteProduct: (id: string) => void;
};

export const ProductContext = React.createContext<ContextType | undefined>(
  undefined
);

export const ProductProvider: React.FC = ({ children }) => {
  const [productList, setProductList] = useState<IProduct[]>([]);

  const saveProduct = (product: Product) => {
    const newProduct: Product = {
      id: product.id,
      name: product.name,
      type: product.type,
      price: product.price,
    };
    setProductList([...productList, newProduct]);
  };
  const editProduct = (
    id: string,
    name: string,
    price: string,
    type: string
  ) => {
    const copyProductList = [...productList];
    let product = copyProductList.find((product) => product.id === id)!;
    const index = copyProductList.indexOf(product);

    product.name = name;
    product.price = price;
    product.type = type;

    copyProductList[index] = product;

    setProductList(copyProductList);
  };

  const deleteProduct = (id: string) => {
    setProductList((prev) => [...prev].filter((pro) => pro.id !== id));
  };
  return (
    <ProductContext.Provider
      value={{
        productList: productList,
        saveProduct: saveProduct,
        editProduct: editProduct,
        deleteProduct: deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
