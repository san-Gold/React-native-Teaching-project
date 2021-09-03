import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function My({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text>my</Text>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate("Login")}
        ></Button>
      </View>
    </SafeAreaView>
  );
}
