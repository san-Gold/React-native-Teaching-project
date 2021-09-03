import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { theme } from "./infrastructure/theme";
import { ThemeProvider } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Navigations from "./navigations/index";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "./store/index";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Navigations />
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
