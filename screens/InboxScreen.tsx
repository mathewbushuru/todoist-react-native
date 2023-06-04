import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

import { type stackParamsList } from "../App";

type propTypes = NativeStackScreenProps<stackParamsList, "inbox">;

export default function InboxScreen({ navigation, route }: propTypes) {
  const { userId } = route.params;
  return (
    <>
      <StatusBar style="light" />
      <View>
        <Text>InboxScreen</Text>
        <Text> Welcome {userId}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
