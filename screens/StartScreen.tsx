import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

import Button from "../components/ui/Button";
import { type stackParamsList } from "../App";
import { Colors } from "../constants/colors";

type propTypes = NativeStackScreenProps<stackParamsList, "start">;

export default function StartScreen({
  navigation,
}: {
  navigation: propTypes["navigation"];
}) {
  return (
    <View style={styles.screen}>
      <Image
        source={require("../assets/imgs/logo.png")}
        style={styles.logoImg}
      />
      <Image
        source={require("../assets/imgs/start-image.webp")}
        style={styles.startImg}
      />
      <Text style={styles.startText}>
        Organize your work and life, finally.
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          iconName="ios-logo-apple"
          onPress={() => {
            console.log("TODO: Sign up with Apple");
            navigation.navigate("signupModal");
          }}
        >
          Continue with Apple
        </Button>
        <Button
          variant="outline"
          iconName="ios-logo-google"
          onPress={() => {
            console.log("TODO: Sign up with Google");
            navigation.navigate("home");
          }}
        >
          <Text>Continue with Google</Text>
        </Button>
        <Text style={[styles.mutedText, styles.mutedTextUnderlined]}>
          More sign-in options
        </Text>
        <Text style={styles.mutedText}>
          By continuing, you agree to Todoist's{" "}
          <Text style={styles.mutedTextUnderlined}>Terms of Service </Text>
          and <Text style={styles.mutedTextUnderlined}> Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 70,
    backgroundColor: Colors.background,
  },
  logoImg: {
    width: 633 / 3.5,
    height: 172 / 3.5,
  },
  startImg: {
    width: 1358 / 3.5,
    height: 806 / 3.5,
  },
  startText: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    gap: 12,
    alignSelf: "stretch",
    paddingHorizontal: 20,
  },
  mutedText: {
    color: Colors.muted,
    fontSize: 12,
    textAlign: "center",
    marginTop: 1,
  },
  mutedTextUnderlined: {
    textDecorationLine: "underline",
  },
});
