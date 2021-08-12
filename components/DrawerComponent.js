import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

function DrawerComponent({ name, onPress, notify }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.drawerCardLink}>
        <Text style={styles.drawerCardText}>{name}</Text>

        {notify ? (
          <View style={styles.drawerCardIconCover}>
            <Text style={styles.drawerCardIcon}>{notify}</Text>
          </View>
        ) : (
          <Text></Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {},
  drawerCardLink: {
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "space-between",
  },
  drawerCardIconCover: {
    width: 20,
    borderRadius: 50,
    overflow: "hidden",
    marginRight: 20,
  },
  drawerCardIcon: {
    backgroundColor: "red",
    width: "100%",
    textAlign: "center",
    color: "#fff",
  },
});
export default DrawerComponent;
