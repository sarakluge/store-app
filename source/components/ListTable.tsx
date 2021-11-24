import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { tokens } from "../helpers/translation/appStructure";
import { translate } from "../helpers/translation/translation";

const ListTable: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.leftItem}>
        {translate(tokens.screens.productListScreen.NameLabel)}
      </Text>
      <Text style={styles.centerItem}>
        {translate(tokens.screens.productListScreen.TypeLabel)}
      </Text>
      <Text style={styles.rightItem}>
        {translate(tokens.screens.productListScreen.PriceLabel)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 10,
  },
  leftItem: {
    width: "33%",
    textAlign: "left",
  },
  centerItem: {
    width: "33%",
    textAlign: "center",
  },
  rightItem: {
    width: "33%",
    textAlign: "right",
  },
});

export default ListTable;
