import React from "react";
import { useTheme } from "@shopify/restyle";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { Theme, Text } from "./Theme";

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: "primary" | "default" | "transparent";
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
});

const getButtonColors = (variant, theme) => {
  let backgroundColor = theme.colors.primary;
  let color = theme.colors.white;

  switch (variant) {
    case "primary":
      backgroundColor = theme.colors.primary;
      color = theme.colors.white;
      break;
    case "transparent":
      backgroundColor = "transparent";
      color = theme.colors.title;
      break;
    case "default":
    default:
      backgroundColor = theme.colors.grey;
      color = theme.colors.title;
      break;
  }

  return {
    backgroundColor,
    color,
  };
};

const Button = ({ label, onPress, variant }: ButtonProps) => {
  const theme = useTheme<Theme>();
  switch (variant) {
  }
  const { backgroundColor, color } = getButtonColors(variant, theme);
  return (
    <RectButton style={[styles.container, { backgroundColor }]} onPress={onPress}>
      <Text variant="button" style={{ color }}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = {
  variant: "default",
};

export default Button;
