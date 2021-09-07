import React, { useState, useEffect } from "react";
import { WebView } from "react-native-webview";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text } from "../../components/typography/text.component";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { Header, ListItem, Avatar, SearchBar } from "react-native-elements";
export default function Shop() {
  const [webviewKey, setwebviewKey] = useState(null);
  useEffect(() => {
    reload();
  }, []);

  const reload = () => {
    setwebviewKey(Date.now());
  };

  return (
    <View style={styles.webView}>
      <Header
        placement="center"
        centerComponent={{
          text: "分类",
          style: { color: "#fff", fontSize: 16 },
        }}
      />
      <WebView
        key={webviewKey}
        style={styles.webView}
        source={{ uri: "https://so.m.jd.com/webportal/channel/m_category" }}
        onContentProcessDidTerminate={reload}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  webView: {
    flex: 1,
  },
});
