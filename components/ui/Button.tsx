import { Pressable, StyleSheet, View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface propsType {
  variant?: "default" | "outline";
  onPress: () => void;
  iconName?: keyof typeof Ionicons.glyphMap;
  children: React.ReactNode;
}

export default function Button({
  variant = "default",
  onPress,
  iconName,
  children,
}: propsType) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.pressableContainer} onPress={onPress}>
        {iconName && <Ionicons name={iconName} size={18} color="white" />}
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#000000",
    borderRadius: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  pressableContainer: {
    flexDirection: "row",
    justifyContent:'center',
    alignItems:"center",
    padding: 12,
    gap: 5,
  },
});
