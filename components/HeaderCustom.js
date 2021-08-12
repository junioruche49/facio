import React from "react";
import { View, StyleSheet, Text, Dimensions, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const dim = Dimensions.get("screen");

function HeaderCustom({ name }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(251,240,171,1)", "rgba(200,149,234,1)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.headerContent}
      >
        <Text style={styles.headerText}>{name}</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
  },
  headerContent: {
    height: "100%",
    width: dim.width,
    marginLeft: Platform.OS === "android" ? -15 : 0,
    marginBottom: 10,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default HeaderCustom;
