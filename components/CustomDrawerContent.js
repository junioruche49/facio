import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  Alert,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import Screen from "./Screens";
import { useDispatch } from "react-redux";
import colors from "../config/colors";
import { logout } from "../store/actions/auth";
import Constants from "expo-constants";
import DrawerComponent from "./DrawerComponent";
import { useSelector } from "react-redux";

function CustomDrawerContent({ navigation }) {
  const dispatch = useDispatch();
  const first_name = useSelector((state) => state.profile.first_name);
  const last_name = useSelector((state) => state.profile.last_name);
  const fullName = first_name + " " + last_name;

  const navOptions = [
    {
      name: "Account",
      route: "Account",
      notify: "",
    },
    {
      name: "Contacts",
      route: "Contacts",
      notify: "",
    },
    {
      name: "Notifications",
      route: "Notifications",
      notify: "1",
    },
    {
      name: "Help",
      route: "Help",
      notify: "",
    },
  ];

  const navigateToPage = (route) => {
    navigation.navigate(route);
  };

  return (
    <Screen style={styles.spacing}>
      <View style={styles.container}>
        <View style={styles.drawerCard}>
          <View style={styles.drawerCardContent}>
            <Text style={styles.drawerCardTextHeader}>{fullName}</Text>
            {/* <Text>Credit Score: 620</Text> */}
          </View>
          <Image
            style={styles.drawerCardImage}
            source={require("../assets/Ellipse_7.png")}
          />
        </View>
        <View style={styles.drawerLinks}>
          {navOptions.map((data, index) => (
            <DrawerComponent
              key={index}
              name={data.name}
              notify={data.notify}
              onPress={() => navigateToPage(data.route)}
            />
          ))}
        </View>
        <View>
          <Button
            style={styles.logout}
            title="Logout"
            color={colors.danger}
            onPress={() => {
              Alert.alert("Logut", "Are sure you want to logout?", [
                { text: "No", style: "cancel" },
                { text: "Yes", onPress: () => dispatch(logout()) },
              ]);
            }}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  spacing: {
    paddingTop: Platform.OS === "android" ? 0.3 * Constants.statusBarHeight : 0,
  },
  drawerCard: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cfcfcf",
    paddingBottom: 10,
  },
  drawerCardContent: {
    flex: 1,
    paddingHorizontal: 15,
  },
  drawerCardTextHeader: {
    fontSize: 20,
    fontWeight: "600",
  },
  drawerLinks: {
    marginVertical: 15,
    marginLeft: 15,
  },
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
  logout: {},
});
export default CustomDrawerContent;
