import {
  Pressable,
  StyleSheet,
  View,
  Text,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../constants/colors";

interface propsType {
  variant?: "default" | "outline" | "primary" | "link" | "secondary";
  onPress: () => void;
  iconName?: keyof typeof Ionicons.glyphMap;
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

export default function Button({
  variant = "default",
  onPress,
  iconName,
  containerStyles = {},
  textStyles = {},
  children,
}: propsType) {
  let buttonContainerStyles, buttonTextStyles;

  switch (variant) {
    case "outline":
      buttonContainerStyles = styles.buttonContainerOutline;
      buttonTextStyles = styles.buttonTextOutline;
      break;

    case "primary":
      buttonContainerStyles = styles.buttonContainerPrimary;
      buttonTextStyles = styles.buttonText;
      break;

    case "secondary":
      buttonContainerStyles = styles.buttonContainerSecondary;
      buttonTextStyles = styles.buttonTextSecondary;
      break;

    case "link":
      buttonContainerStyles = styles.buttonContainerLink;
      buttonTextStyles = styles.buttonTextLink;
      break;

    default:
      buttonContainerStyles = styles.buttonContainer;
      buttonTextStyles = styles.buttonText;
      break;
  }
  const iconColor = variant === "outline" ? "black" : "white";
  return (
    <View style={[buttonContainerStyles, containerStyles]}>
      <Pressable style={styles.pressableContainer} onPress={onPress}>
        {iconName && <Ionicons name={iconName} size={18} color={iconColor} />}
        <Text style={[buttonTextStyles, textStyles]}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  // button container
  buttonContainer: {
    backgroundColor: Colors.black,
    borderRadius: 8,
  },
  buttonContainerPrimary: {
    backgroundColor: Colors.primaryBackground,
    borderRadius: 8,
  },
  buttonContainerSecondary: {
    backgroundColor: Colors.secondaryBackground,
    borderRadius: 8,
  },
  buttonContainerLink: {
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  buttonContainerOutline: {
    borderColor: Colors.black,
    borderWidth: 2,
    borderRadius: 8,
  },
  // button text
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
  buttonTextLink: {
    color: Colors.primaryBackground,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextSecondary: {
    color: Colors.popoverForeground,
    fontSize: 16,
    fontWeight: "bold",
  },
  // pressable
  pressableContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    gap: 5,
  },
});
