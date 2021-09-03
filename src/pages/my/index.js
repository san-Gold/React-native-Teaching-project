import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text } from "../../components/typography/text.component";

export default function My({ navigation }) {
  return (
    <SafeArea>
      <View>
        <Text>my</Text>
        <Text onPress={() => navigation.navigate("Login")}>Go to Login</Text>
      </View>
    </SafeArea>
  );
}
