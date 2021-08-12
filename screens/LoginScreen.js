import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Pressable,
} from "react-native";
import * as Yup from "yup";
import { Ionicons } from "@expo/vector-icons";

import { Form, FormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screens";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const image = { require: "../assets/undraw_Mail_sent_re_0ofv.png" };

function LoginScreen({ navigation }) {
  const [checked, onChange] = useState(true);

  function onCheckmarkPress() {
    onChange(!checked);
  }

  const authenticate = async (values) => {};

  return (
    <Screen style={styles.container}>
      <ImageBackground
        source={require("../assets/bg.jpeg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.loginSection}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              FACI<Text style={styles.headerSpan}>O</Text>
            </Text>
          </View>

          <Form
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => authenticate(values)}
            validationSchema={validationSchema}
          >
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <View style={styles.checkbox}>
              <Text style={styles.forgotPswd}>
                <Pressable
                  style={[
                    styles.checkboxBase,
                    checked && styles.checkboxChecked,
                  ]}
                  onPress={onCheckmarkPress}
                >
                  {checked && (
                    <Ionicons
                      name="checkmark"
                      size={18}
                      color={colors.primary}
                    />
                  )}
                </Pressable>
                <View style={styles.logg}>
                  <Text style={styles.forgotPswd}>Keep me logged in</Text>
                </View>
              </Text>
            </View>
            <SubmitButton
              title="Login"
              onPress={() => navigation.navigate("Login_2")}
            />

            <View style={styles.buttonsContainer}>
              <Text style={styles.forgotPswd}>
                Forgot password?{" "}
                <Text style={styles.prmText}>Recover here</Text>
              </Text>
            </View>
          </Form>
        </View>
        <View style={styles.buttonsContainer}>
          <Text style={styles.forgotPswd}>
            Don't have an account?{" "}
            <Text style={styles.prmText}>Signup here</Text>
          </Text>
        </View>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    padding: 20,
    backgroundColor: "#050505",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  header: {
    alignItems: "center",
  },
  headerText: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "bold",
  },
  headerSpan: {
    color: colors.primary,
  },
  loginSection: {
    flex: 2,
    marginTop: 150,
  },

  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: "transparent",
  },

  checkboxChecked: {
    backgroundColor: "transparent",
  },
  buttonsContainer: {
    alignItems: "center",
    width: "100%",
  },
  forgotPswd: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 25,
  },
  prmText: {
    color: colors.primary,
    fontWeight: "600",
  },
  checkbox: {
    marginVertical: 10,
  },
  logg: {
    paddingLeft: 10,
  },
});

export default LoginScreen;
