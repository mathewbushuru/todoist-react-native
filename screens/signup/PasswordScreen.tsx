import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

import Button from "../../components/ui/Button";
import { Colors } from "../../constants/colors";
import { signupModalParamsList } from "../../App";

type propTypes = NativeStackScreenProps<signupModalParamsList, "signupEmail">;

export default function PasswordScreen() {
  const navigation: propTypes["navigation"] = useNavigation();
  const [password, onChangePassword] = useState<string>("");
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          variant="link"
          containerStyles={styles.linkBtnContainer}
          textStyles={styles.linkBtnText}
          onPress={() => {
            navigation.goBack();
          }}
        >
          Go Back
        </Button>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.emailText}>
          Using <Text style={styles.emailTextBold}>email@test.com</Text> to sign
          up
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>YOUR PASSWORD</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            keyboardType="visible-password"
            autoFocus={true}
          />
          <Button
            variant="primary"
            onPress={() => {
              console.log("TODO: validate password input");
              navigation.navigate("signupSelectUse");
            }}
          >
            Sign Up
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 18,
    backgroundColor: Colors.secondaryBackground,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    paddingHorizontal: 12,
  },
  emailText: {
    marginTop: 12,
    paddingHorizontal: 12,
    color: Colors.muted,
    fontSize: 15,
  },
  emailTextBold: {
    fontWeight: "bold",
  },
  inputContainer: {
    gap: 4,
    paddingHorizontal: 12,
    marginTop: 84,
  },
  inputLabel: {
    color: Colors.muted,
  },
  input: {
    height: 48,
    marginVertical: 12,
    borderWidth: 0,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: Colors.popoverBackground,
  },
  linkBtnContainer: {
    alignSelf: "flex-start",
  },
  linkBtnText: {
    fontWeight: "normal",
    fontSize: 18,
  },
});
