import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import ProductListScreen from "./source/screens/ProductListScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackScreens } from "./source/helpers/types";
import AddAndEditScreen from "./source/screens/AddAndEditScreen";
import { ProductProvider } from "./source/context/ProductContext";
import { setI18Config } from "./source/helpers/translation/translation";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator<StackScreens>();

export default function App() {
  useEffect(() => {
    setI18Config();
  }, []);
  return (
    <SafeAreaProvider>
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
    </SafeAreaProvider>
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
