import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

import Button from "../components/ui/Button";
import { type stackParamsList } from "../App";

type propTypes = NativeStackScreenProps<stackParamsList, "home">;

export default function HomeScreen({
  navigation,
}: {
  navigation: propTypes["navigation"];
}) {
  return (
    <View style={styles.rootContainer}>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("inbox", { userId: "sddsffd" })}
      >
        View tasks in inbox
      </Button>
      <Button variant="outline" onPress={() => navigation.navigate("start")}>
        Back to start page
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
});
