import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

import Button from "../../components/ui/Button";
import { Colors } from "../../constants/colors";
import { type signupModalParamsList } from "../../App";

type propTypes = NativeStackScreenProps<signupModalParamsList, "signupEmail">;

export default function EmailScreen() {
  const navigation: propTypes["navigation"] = useNavigation();
  const [email, onChangeEmail] = useState<string>("");
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
          Close
        </Button>
        <Text style={styles.title}>What's your email address?</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>YOUR EMAIL</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
            autoFocus={true}
          />
          <Button
            variant="primary"
            onPress={() => {
              console.log("TODO: validate email input");
              navigation.navigate("signupPassword")
            }}
          >
            Continue with email
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
  inputContainer: {
    gap: 4,
    paddingHorizontal: 12,
    marginTop: 96,
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
