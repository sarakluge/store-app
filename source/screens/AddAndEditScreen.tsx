import React, { useContext, useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { v4 as uuid_v4 } from "uuid";
import { StackScreens } from "../helpers/types";
import { Product } from "../helpers/types";
import { ProductContext } from "../context/ProductContext";
import IconButton from "../components/IconButton";
import Header from "../components/Header";
import { translate } from "../helpers/translation/translation";
import { tokens } from "../helpers/translation/appStructure";

interface IAddAndEditScreen
  extends NativeStackScreenProps<StackScreens, "AddAndEditScreen"> {}

const AddAndEditScreen: React.FC<IAddAndEditScreen> = (props) => {
  const context = useContext(ProductContext);

  const [productList, setProductList] = useState<Product[]>([]);
  const [selectedType, setSelectedType] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [validPrice, setValidPrice] = useState(false);
  const [validName, setValidName] = useState(false);

  useEffect(() => {
    if (props.route.params?.product) {
      setName(props.route.params.product.name);
      setPrice(props.route.params.product.price);
      setSelectedType(props.route.params.product.type);
    }
    setProductList(context!.productList);
  }, []);

  useEffect(() => {
    if (price != "") {
      if (selectedType == "Integrated") {
        if (parseInt(price) >= 1000 && parseInt(price) <= 2600) {
          setValidPrice(true);
        } else {
          setValidPrice(false);
        }
      } else if (selectedType == "Peripheral") {
        if (parseInt(price) > 0) {
          setValidPrice(true);
        } else {
          setValidPrice(false);
        }
      }
    } else {
      setValidPrice(false);
    }
  }, [price, selectedType]);

  useEffect(() => {
    if (props.route.params?.product == undefined) {
      if (name != "") {
        if (productList.find((product) => product.name === name)) {
          setValidName(false);
        } else {
          setValidName(true);
        }
      } else {
        setValidName(false);
      }
    } else {
      setValidName(true);
    }
  }, [name]);

  const handleAddProduct = () => {
    let newProduct: Product = {
      id: uuid_v4(),
      name: name,
      type: selectedType,
      price: price,
    };
    context?.saveProduct(newProduct);
    props.navigation.navigate("ProductListScreen");
  };

  const handleEditProduct = () => {
    let id = props.route.params!.product.id;
    let newName = name;
    let newPrice = price;
    let newType = selectedType;

    context?.editProduct(id, newName, newPrice, newType);
    props.navigation.navigate("ProductListScreen");
  };

  const handleDeleteProduct = () => {
    context?.deleteProduct(props.route.params!.product.id);
    props.navigation.navigate("ProductListScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      {props.route.params?.product ? (
        <>
          <Header
            text={translate(tokens.screens.addAndEditScreen.EditHeader)}
            bgColor="#ebf0ee"
            bold={true}
            fontSize={25}
            centerText
          />
          <TextInput
            style={styles.input}
            placeholder={translate(
              tokens.screens.addAndEditScreen.NamePlaceholder
            )}
            value={name}
            onChangeText={(value) => setName(value)}
          />
          <TextInput
            style={styles.input}
            placeholder={translate(
              tokens.screens.addAndEditScreen.PricePlaceholder
            )}
            keyboardType="decimal-pad"
            value={price}
            onChangeText={(value) => setPrice(value)}
          />
          <Picker
            style={styles.picker}
            selectedValue={selectedType}
            onValueChange={(itemValue, itemIndex) => setSelectedType(itemValue)}
            itemStyle={styles.pickerItem}
          >
            <Picker.Item
              label={translate(tokens.screens.addAndEditScreen.TypeTitle)}
              value=""
            />
            <Picker.Item
              label={translate(tokens.screens.addAndEditScreen.Peripheral)}
              value="Peripheral"
            />
            <Picker.Item
              label={translate(tokens.screens.addAndEditScreen.Integrated)}
              value="Integrated"
            />
          </Picker>
          <View style={styles.btnRow}>
            <View style={styles.btnContainer}>
              <IconButton
                label={translate(tokens.screens.addAndEditScreen.SaveBtnLabel)}
                onPress={() => handleEditProduct()}
                icon="download"
                bgColor="#008700"
                labelColor="#fff"
                disabled={
                  selectedType == "" ||
                  validPrice == false ||
                  validName == false
                }
              />
            </View>
            <View style={styles.btnContainer}>
              <IconButton
                label={translate(
                  tokens.screens.addAndEditScreen.CancelBtnLabel
                )}
                onPress={() => props.navigation.navigate("ProductListScreen")}
                icon="cancel"
                bgColor="#ebf0ee"
                labelColor="#000"
                border={true}
              />
            </View>
          </View>
          <View style={styles.btnRow}>
            <IconButton
              label={translate(tokens.screens.addAndEditScreen.DeleteBtnLabel)}
              onPress={() => handleDeleteProduct()}
              icon="delete"
              bgColor="red"
              labelColor="#fff"
            />
          </View>
        </>
      ) : (
        <>
          <Header
            text={translate(tokens.screens.addAndEditScreen.AddHeader)}
            bgColor="#ebf0ee"
            bold={true}
            fontSize={25}
            centerText
          />
          <TextInput
            style={styles.input}
            placeholder={translate(
              tokens.screens.addAndEditScreen.NamePlaceholder
            )}
            value={name}
            onChangeText={(value) => setName(value)}
          />
          <TextInput
            style={styles.input}
            placeholder={translate(
              tokens.screens.addAndEditScreen.PricePlaceholder
            )}
            keyboardType="decimal-pad"
            value={price}
            onChangeText={(value) => setPrice(value)}
          />
          <Picker
            style={styles.picker}
            selectedValue={selectedType}
            onValueChange={(itemValue, itemIndex) => setSelectedType(itemValue)}
            itemStyle={styles.pickerItem}
          >
            <Picker.Item
              label={translate(tokens.screens.addAndEditScreen.TypeTitle)}
              value=""
            />
            <Picker.Item
              label={translate(tokens.screens.addAndEditScreen.Peripheral)}
              value="Peripheral"
            />
            <Picker.Item
              label={translate(tokens.screens.addAndEditScreen.Integrated)}
              value="Integrated"
            />
          </Picker>
          <View style={styles.btnRow}>
            <View style={styles.btnContainer}>
              <IconButton
                label={translate(tokens.screens.addAndEditScreen.SaveBtnLabel)}
                onPress={() => handleAddProduct()}
                icon="download"
                bgColor="#008700"
                labelColor="#fff"
                disabled={
                  selectedType == "" ||
                  validPrice == false ||
                  validName == false
                }
              />
            </View>
            <View style={styles.btnContainer}>
              <IconButton
                label={translate(
                  tokens.screens.addAndEditScreen.CancelBtnLabel
                )}
                onPress={() => props.navigation.navigate("ProductListScreen")}
                icon="cancel"
                bgColor="#ebf0ee"
                labelColor="#000"
                border={true}
              />
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "center",
    padding: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    width: "90%",
    height: 70,
    backgroundColor: "#ebf0ee",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    marginVertical: 15,
    paddingLeft: 10,
    fontSize: 20,
  },
  picker: {
    width: "90%",
    fontSize: 20,
    margin: 0,
  },
  pickerItem: {
    height: 140,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    marginVertical: 15,
    backgroundColor: "#ebf0ee",
  },
  btnContainer: {
    width: "50%",
    margin: 5,
  },
  btnRow: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "center",
    padding: 10,
  },
});

export default AddAndEditScreen;
