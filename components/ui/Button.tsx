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
  const buttonContainerStyles =
    variant === "outline"
      ? styles.buttonContainerOutline
      : styles.buttonContainer;
  const buttonTextStyles =
    variant === "outline" ? styles.buttonTextOutline : styles.buttonText;
  const iconColor = variant === "outline" ? "black" : "white";
  return (
    <View style={buttonContainerStyles}>
      <Pressable style={styles.pressableContainer} onPress={onPress}>
        {iconName && <Ionicons name={iconName} size={18} color={iconColor} />}
        <Text style={buttonTextStyles}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#000000",
    borderRadius: 8,
  },
  buttonContainerOutline: {
    borderColor: "#000000",
    borderWidth: 2,
    borderRadius: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextOutline: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  pressableContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    gap: 5,
  },
});
