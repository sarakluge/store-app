import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProductListScreen from "./source/screens/ProductListScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackScreens } from "./source/helpers/types";
import AddAndEditScreen from "./source/screens/AddAndEditScreen";
import {
  ProductContext,
  ProductProvider,
} from "./source/context/ProductContext";

const Stack = createNativeStackNavigator<StackScreens>();

export default function App() {
  return (
    <ProductProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ProductListScreen">
          <Stack.Screen
            name="ProductListScreen"
            component={ProductListScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddAndEditScreen"
            component={AddAndEditScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
