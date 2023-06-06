import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsIcon({
  tintColor,
}: {
  tintColor: string | undefined;
}) {
  return (
    <Pressable
      onPress={() => {
        console.log("TODO: open settings");
      }}
    >
      <Ionicons name="settings-outline" color={tintColor} size={22} />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
