import React from "react";
import { StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { SafeArea } from "../../components/utility/safe-area.component";
import { Text } from "../../components/typography/text.component";
import { View, StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import { Header } from "react-native-elements";
export default function Order() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* <Header
        placement="center"
        centerComponent={{
          text: "我的订单",
          style: { color: "#fff", fontSize: 16 },
        }}
      /> */}
      <ScrollView
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          flex: 1,
        }}
      >
        {Array(80)
          .fill(1)
          .map((e, i) => {
            return (
              <Text key={i}>OrderOrderOrderOrderOrderOrderOrder-{i + 1}</Text>
            );
          })}
      </ScrollView>
    </View>
  );
}
