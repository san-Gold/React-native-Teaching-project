import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text } from "../../components/typography/text.component";
import { ListItem, Avatar, Button, Icon } from "react-native-elements";

export default function My({ navigation }) {
  const list = [
    {
      name: "Amy Farha",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      subtitle: "Vice President",
    },
    {
      name: "Chris Jackson",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "Vice Chairman",
    },
  ];

  return (
    <SafeArea>
      <View>
        <Text>my</Text>
        <Button title="登录" onPress={() => navigation.navigate("Login")} />

        <ListItem.Swipeable
          leftContent={
            <Button
              title="Info"
              icon={{ name: "info", color: "white" }}
              buttonStyle={{ minHeight: "100%" }}
            />
          }
          rightContent={
            <Button
              title="Delete"
              icon={{ name: "delete", color: "white" }}
              buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
            />
          }
        >
          <Icon name="My Icon" />
          <ListItem.Content>
            <ListItem.Title>Hello Swiper</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem.Swipeable>
      </View>
    </SafeArea>
  );
}
