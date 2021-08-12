import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Button,
  ActivityIndicator,
  Alert,
  Text,
} from "react-native";
import * as Yup from "yup";

import { Form, SubmitButton } from "../components/forms";
import Screen from "../components/Screens";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function EmailVerify({ navigation }) {
  const authenticate = async (values) => {};

  return (
    <Screen style={styles.container}>
      <View style={styles.loginSection}>
        <Image
          style={styles.logo}
          source={require("../assets/undraw_Mail_sent_re_0ofv.png")}
        />
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
          <View style={styles.checkbox}>
            <Text style={styles.forgotPswd}>
              Hi Saby! Please use the link below to verify your email and start
              using FACIO.
            </Text>
          </View>
          <SubmitButton title="Verify Email" />

          <View style={styles.buttonsContainer}>
            <Text style={styles.forgotPswd}>
              Questions? Email us at{" "}
              <Text style={styles.prmText}>contact@facio.com</Text>
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
    marginTop: 100,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
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
});

export default EmailVerify;
