import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import LoginScreen_2 from "../screens/LoginScreen_2";
import EmailVerify from "../screens/EmailVerify";

const Stack = createStackNavigator();

export default AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitle: false }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login_2"
        component={LoginScreen_2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Verification"
        component={EmailVerify}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
