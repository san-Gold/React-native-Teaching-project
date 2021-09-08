import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text } from "../../components/typography/text.component";
import { ListBox } from "./block";

import { ListItem, Avatar, Button, Icon, Header } from "react-native-elements";

export default function My({ navigation }) {
  const getData = () => {
    fetch("https://facebook.github.io/react-native/movies.json")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View>
      <Header
        placement="center"
        centerComponent={{
          text: "我的",
          style: { color: "#fff", fontSize: 16 },
        }}
      />
      <ListBox {...navigation} />

      <Button title="发送网络请求" onPress={getData} />
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
  );
}
