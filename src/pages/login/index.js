import React from "react";
import { useSelector } from "react-redux";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text } from "../../components/typography/text.component";

export default function Login() {
  let loginInfo = useSelector((store) => store.loginInfo);
  return (
    <SafeArea>
      <Text>login</Text>
      <Text>Store的登录状态{JSON.stringify(loginInfo)}</Text>
    </SafeArea>
  );
}
