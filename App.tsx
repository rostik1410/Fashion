import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@shopify/restyle";
import { LoadAssets } from "./src/components";

import { Onboarding, Welcome } from "./src/Authentication";
import { theme } from "./src/components/common";
import { Routes } from "./src/Naviagation";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
};

const AuthenticationStack = createStackNavigator<Routes>();
const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    <AuthenticationStack.Screen name="Welcome" component={Welcome} />
  </AuthenticationStack.Navigator>
);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets fonts={fonts}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
