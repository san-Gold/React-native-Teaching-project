import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text } from "../../components/typography/text.component";
import { ListItem, Avatar, Button, Icon, Header } from "react-native-elements";

export default function My({ navigation }) {
  const list = [
    {
      name: "朋友圈",
      avatar_url:
        "https://avatars.githubusercontent.com/u/50647350?s=400&u=a306408f34ccf02e742f2d88839231eb580ca7dd&v=4",
    },
    {
      name: "视频号",
      avatar_url:
        "https://avatars.githubusercontent.com/u/50647350?s=400&u=a306408f34ccf02e742f2d88839231eb580ca7dd&v=4",
    },
    {
      name: "扫一扫",
      avatar_url:
        "https://avatars.githubusercontent.com/u/50647350?s=400&u=a306408f34ccf02e742f2d88839231eb580ca7dd&v=4",
    },
    {
      name: "摇一摇",
      avatar_url:
        "https://avatars.githubusercontent.com/u/50647350?s=400&u=a306408f34ccf02e742f2d88839231eb580ca7dd&v=4",
    },
  ];
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
      {list.map((l, i) => (
        <ListItem key={i} bottomDivider onPress={l.onPress}>
          <Avatar rounded source={{ uri: l.avatar_url }} />
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}

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
