import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface IHeader {
  bgColor?: string;
  textColor?: string;
  text: string;
  centerText?: boolean;
  bold?: boolean;
  fontSize?: number;
}

const Header: React.FC<IHeader> = ({
  bgColor,
  textColor,
  text,
  centerText,
  bold,
  fontSize,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: bgColor ? bgColor : "#fff",
          alignItems: centerText ? "center" : "flex-start",
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: textColor ? textColor : "#000",
            fontWeight: bold ? "bold" : "normal",
            fontSize: fontSize ? fontSize : 20,
          },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    justifyContent: "center",
    padding: 10,
    width: "100%",
  },
  text: {
    fontSize: 20,
  },
});

export default Header;
