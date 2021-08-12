import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";

let colorText = "";

function CustomBtn({ title, onPress, color = "primary", bgColor = "" }) {
  colorText = color;
  return (
    <TouchableOpacity
      style={
        bgColor
          ? [styles.button, { backgroundColor: colors.primary }]
          : [styles.button, { backgroundColor: colors[color] }]
      }
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

console.log(colorText);

const styles = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colorText == "white" ? colors.black : colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default CustomBtn;
