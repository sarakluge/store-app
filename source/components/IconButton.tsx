import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

interface IIconButton {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  bgColor: string;
  labelColor: string;
  icon: "download" | "cancel" | "delete";
  border?: boolean;
}

const IconButton: React.FC<IIconButton> = ({
  label,
  onPress,
  disabled,
  bgColor,
  labelColor,
  icon,
  border,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
          opacity: disabled ? 0.25 : 1,
          borderWidth: border ? 1 : 0,
          borderColor: "#000",
        },
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
      {icon == "cancel" ? (
        <MaterialCommunityIcons name={icon} color="#fff" size={30} />
      ) : (
        <AntDesign name={icon} color="#fff" size={30} />
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    width: "100%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    // margin: 5,
  },
  label: {
    textTransform: "uppercase",
    fontSize: 20,
    margin: 5,
    fontWeight: "bold",
  },
});

export default IconButton;
