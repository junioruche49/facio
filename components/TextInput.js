import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View
      style={[
        otherProps.formType == "type_2" ? styles.container2 : styles.container,
        { width },
      ]}
    >
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={
            otherProps.formType == "type_2"
              ? defaultStyles.colors.light
              : defaultStyles.colors.white
          }
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={
          otherProps.formType == "type_2"
            ? defaultStyles.colors.dark
            : defaultStyles.colors.white
        }
        style={
          otherProps.formType == "type_2"
            ? defaultStyles.text2
            : defaultStyles.text
        }
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 5,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  container2: {
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 5,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#e6e6e6",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
