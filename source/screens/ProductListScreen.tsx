import React, { useState, useEffect, useContext } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-paper";
import { Product } from "../helpers/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreens } from "../helpers/types";
import { ProductContext } from "../context/ProductContext";
import Header from "../components/Header";
import ListTable from "../components/ListTable";
import ListItem from "../components/ListItem";
import { setI18Config } from "../helpers/translation/translation";
import { tokens } from "../helpers/translation/appStructure";
import { translate } from "../helpers/translation/translation";

interface IProductListScreen
  extends NativeStackScreenProps<StackScreens, "ProductListScreen"> {}

const ProductListScreen: React.FC<IProductListScreen> = (props) => {
  setI18Config();
  const context = useContext(ProductContext);
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    setProductList(context!.productList);
    setI18Config();
  }, [context?.productList]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        text={translate(tokens.screens.productListScreen.HeaderString)}
        bgColor="#008700"
        textColor="#fff"
      />
      <ListTable />
      {productList && productList?.length <= 0 ? (
        <View style={styles.emptyListWrapper}>
          <Text style={styles.emptyListText}>
            {translate(tokens.screens.productListScreen.EmptyListString)}
          </Text>
          <FAB
            style={styles.fab}
            icon="plus"
            onPress={() => props.navigation.navigate("AddAndEditScreen")}
            small
          ></FAB>
        </View>
      ) : (
        <View style={styles.listWrapper}>
          <FlatList
            style={{ width: "100%" }}
            data={productList}
            renderItem={({ item }) => (
              <ListItem
                item={item}
                onPress={() =>
                  props.navigation.navigate("AddAndEditScreen", {
                    product: item,
                  })
                }
              />
            )}
          />
          <FAB
            style={styles.fab}
            icon="plus"
            onPress={() => props.navigation.navigate("AddAndEditScreen")}
            small
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fefefe",
  },
  emptyListWrapper: {
    flex: 1,
    backgroundColor: "#fefefe",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: 20,
  },
  listWrapper: {
    flex: 1,
  },
  emptyListText: {
    fontSize: 20,
    color: "#9c9c9c",
    paddingBottom: 70,
    textAlign: "center",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#008700",
  },
});

export default ProductListScreen;
