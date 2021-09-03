import React, { useRef, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import BottomTabs from "./BottomTabs";
import Login from "../pages/login/index";
import ShopDetail from "../pages/shop-detail/index";
const Stack = createStackNavigator();
export default function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={"HomeMainTab"}>
        <Stack.Screen name="HomeMainTab" component={BottomTabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ShopDetail" component={ShopDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
