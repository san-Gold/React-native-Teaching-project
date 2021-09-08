import React from "react";
import { View } from "react-native";
import { ListItem, Avatar, Button, Icon, Header } from "react-native-elements";
export function ListBox({ navigate }: any) {
  interface defaultList {
    name: string;
    avatar_url: string;
    onPress?: Function;
  }
  const list: defaultList[] = [
    {
      name: "我的订单",
      avatar_url:
        "https://avatars.githubusercontent.com/u/50647350?s=400&u=a306408f34ccf02e742f2d88839231eb580ca7dd&v=4",
      onPress: () => {
        navigate("Order");
      },
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
  return (
    <View>
      {list.map((l, i) => (
        <ListItem key={i} bottomDivider onPress={l.onPress}>
          <Avatar rounded source={{ uri: l.avatar_url }} />
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
}
