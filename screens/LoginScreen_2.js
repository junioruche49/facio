import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Button,
  ActivityIndicator,
  Alert,
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

function LoginScreen_2({ navigation }) {
  const [checked, onChange] = useState(true);

  function onCheckmarkPress() {
    onChange(!checked);
  }

  const authenticate = async (values) => {};

  return (
    <Screen style={styles.container}>
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
            formType="type_2"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
            formType="type_2"
          />
          <View style={styles.checkbox}>
            <View style={styles.checkboxBody}>
              <Pressable
                style={[styles.checkboxBase, checked && styles.checkboxChecked]}
                onPress={onCheckmarkPress}
              >
                {checked && (
                  <Ionicons name="checkmark" size={18} color={colors.primary} />
                )}
              </Pressable>
              <View style={styles.logg}>
                <Text style={styles.forgotPswd}>Remember me</Text>
              </View>
            </View>
            <View>
              <Text style={styles.prmText}>Forget password?</Text>
            </View>
          </View>
          <SubmitButton
            title="Login"
            onPress={() => navigation.navigate("Verification")}
          />

          <View style={styles.buttonsContainer}>
            <Text style={styles.forgotPswd}>
              Don't have an account?{" "}
              <Text style={styles.prmText}>Signup here</Text>
            </Text>
          </View>
        </Form>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    padding: 20,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  header: {
    alignItems: "center",
  },
  headerText: {
    color: "#000",
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
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  buttonsContainer: {
    alignItems: "center",
    width: "100%",
  },
  forgotPswd: {
    color: "#000",
    fontSize: 16,
    lineHeight: 25,
  },
  prmText: {
    color: colors.primary,
    fontWeight: "600",
  },
  checkbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  checkboxBody: {
    flexDirection: "row",
  },
  logg: {
    paddingLeft: 10,
  },
});

export default LoginScreen_2;
