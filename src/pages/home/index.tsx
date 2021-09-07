import React, { useState, useEffect } from "react";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text } from "../../components/typography/text.component";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { Header, ListItem, Avatar, SearchBar } from "react-native-elements";
// @ts-ignore
import BetterBanner from "react-native-better-banner";

const screenW = Dimensions.get("window").width;

// 一些常量设置
const cols = 4; // 列数
const WH = screenW / cols; // 图片大小

export default function Home({ navigation }: any) {
  const { navigate, goBack, state } = navigation;
  const [search, setsearch] = useState("");

  interface bannerListType {
    uri: string;
  }
  const [bannerList, setBannerList] = useState<bannerListType[] | null>(null);

  interface gradListType {
    uri: string;
    text: string;
  }
  const defaultGradList = new Array(8).fill({
    uri: "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg.dpg",
    text: "京东超市",
  });
  const [gradList, setgradList] = useState<gradListType[] | null>(
    defaultGradList
  );
  useEffect(() => {
    setTimeout(() => {
      setBannerList([
        {
          uri: "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/172985/20/11254/250873/60ab712bE2cfd0e52/f184257039a404d1.png!cr_1053x420_4_0!q70.jpg.dpg",
        },
        {
          uri: "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/205423/2/4129/89917/612f43eeE07b6d0e1/054a92247abbce02.jpg!cr_1053x420_4_0!q70.jpg.dpg",
        },
        {
          uri: "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/205712/36/3922/130882/612dcf0bE8891608f/65f90b5d317ec1cd.jpg!cr_1053x420_4_0!q70.jpg.dpg",
        },
      ]);
    }, 100);
  }, []);

  const updateSearch = (text: string): void => {
    setsearch(text);
  };
  // 点击事件
  const handleBanner = (index: number) => {
    console.log(index);
    if (index === 1) {
      navigation.navigate("Login");
    }
  };
  return (
    <View>
      <Header
        placement="center"
        centerComponent={{
          text: "首页",
          style: { color: "#fff", fontSize: 16 },
        }}
      />
      <SearchBar
        placeholder="Type Here..."
        round
        containerStyle={{
          height: 47,
        }}
        inputContainerStyle={{
          height: 30,
          backgroundColor: "#f5f5f5",
        }}
        value={search}
        clearIcon={false}
        lightTheme={true}
        onChangeText={updateSearch}
      />
      {bannerList && (
        <BetterBanner
          bannerHeight={200}
          bannerImages={bannerList}
          onPress={(index: number) => handleBanner(index)}
          isSeamlessScroll={true}
          indicatorGroupPosition={"center"}
        />
      )}
      <View style={styles.gradMain}>
        {gradList?.map((item, index) => {
          return (
            <View style={styles.gradBox} key={index}>
              <Image
                style={styles.gradImg}
                resizeMode="stretch"
                source={{
                  uri: item.uri,
                }}
              />
              <Text style={styles.gradText}>{item.text}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AvatarRedius: {
    borderRadius: 100,
  },
  gradMain: {
    // flex: 1,
    width: "100%",
    height: WH * 0.85 * 2 + 12,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
  },
  gradBox: {
    // flex: 1,
    width: WH,
    height: WH * 0.8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  gradImg: {
    width: WH * 0.45,
    height: WH * 0.45,
    marginBottom: 5,
  },
  gradText: {
    fontSize: 14,
  },
});
