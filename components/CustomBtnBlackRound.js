import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function CustomBtnBlackRound({
  title,
  onPress,
  color = "primary",
  bgColor = "",
}) {
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
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    color: colors.black,
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "600",
  },
});
export default CustomBtnBlackRound;
