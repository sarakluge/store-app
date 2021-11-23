import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Product } from "../helpers/types";

interface IListItem {
  item: Product;
  onPress: () => void;
}

const ListItem: React.FC<IListItem> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.leftItem}>{item.name}</Text>
      <Text style={styles.centerItem}>{item.type}</Text>
      <Text style={styles.rightItem}>{item.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#ebf0ee",
    margin: 3,
    padding: 10,
    borderRadius: 5,
    justifyContent: "space-between",
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

export default ListItem;
