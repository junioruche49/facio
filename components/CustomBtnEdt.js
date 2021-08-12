import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function CustomBtnEdt({ title, onPress, color = "primary", bgColor = "" }) {
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

const styles = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.black,
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default CustomBtnEdt;
