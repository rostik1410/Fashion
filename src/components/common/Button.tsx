import React from "react";
import { useTheme } from "@shopify/restyle";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { ThemeType, Text } from "./Theme";

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: "primary" | "default";
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

const Button = ({ label, onPress, variant }: ButtonProps) => {
  const theme = useTheme<ThemeType>();
  const backgroundColor = variant === "primary" ? theme.colors.primary : theme.colors.grey;
  const color = variant === "primary" ? theme.colors.white : theme.colors.title;
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
