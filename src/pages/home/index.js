import React from "react";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text } from "../../components/typography/text.component";

export default function Home({ navigation }) {
  return (
    <SafeArea>
      <Text>Home</Text>
      <Text onPress={() => navigation.navigate("Login")}>去登陆</Text>
    </SafeArea>
  );
}
