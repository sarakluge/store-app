import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListTable: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.leftItem}>Name</Text>
      <Text style={styles.centerItem}>Type</Text>
      <Text style={styles.rightItem}>Price</Text>
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
