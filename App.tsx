import { StyleSheet, Text, SafeAreaView, Image, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Button from "./components/ui/Button";

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="auto" />
      <Image
        source={require("./assets/imgs/logo.png")}
        style={styles.logoImg}
      />
      <Image
        source={require("./assets/imgs/start-image.webp")}
        style={styles.startImg}
      />
      <Text style={styles.startText}>
        Organize your work and life, finally.
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          iconName="ios-logo-apple"
          onPress={() => console.log("Sign up with Apple")}
        >
          Continue with Apple
        </Button>
        <Button
          variant="outline"
          iconName="ios-logo-google"
          onPress={() => console.log("Sign up with Google")}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 90,
    paddingHorizontal: 30,
    marginBottom: 70,
    backgroundColor: "#fff",
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
    color:"#666",
    fontSize: 12,
    textAlign: "center",
    marginTop: 1,
  },
  mutedTextUnderlined: {
    textDecorationLine:'underline'
  },
});
