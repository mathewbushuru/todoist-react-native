import { Pressable, StyleSheet, View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../constants/colors";

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
    backgroundColor: Colors.black,
    borderRadius: 8,
  },
  buttonContainerOutline: {
    borderColor: Colors.black,
    borderWidth: 2,
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.background,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextOutline: {
    color: Colors.black,
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
