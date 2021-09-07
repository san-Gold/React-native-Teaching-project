import React from "react";
import { useSelector } from "react-redux";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text } from "../../components/typography/text.component";
import BetterBanner from "react-native-better-banner";
import { StyleSheet, View } from "react-native";

export default function Login({ navigation }: any) {
  const { navigate, goBack, state } = navigation;
  let loginInfo = useSelector((store: any) => store.loginInfo);

  // 点击事件
  const handleBanner = (index: number) => {
    console.log(index);
    if (index === 1) {
      goBack();
    }
  };
  return (
    <SafeArea>
      <Text>login</Text>
      <Text>Store的登录状态{JSON.stringify(loginInfo)}</Text>
      <Text>轮播图展示</Text>
      <View style={styles.swiper}>
        <BetterBanner
          bannerHeight={200}
          bannerImages={[
            {
              uri: "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/205712/36/3922/130882/612dcf0bE8891608f/65f90b5d317ec1cd.jpg!cr_1053x420_4_0!q70.jpg.dpg",
            },
            {
              uri: "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/205423/2/4129/89917/612f43eeE07b6d0e1/054a92247abbce02.jpg!cr_1053x420_4_0!q70.jpg.dpg",
            },
            {
              uri: "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/205712/36/3922/130882/612dcf0bE8891608f/65f90b5d317ec1cd.jpg!cr_1053x420_4_0!q70.jpg.dpg",
            },
            {
              uri: "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/205712/36/3922/130882/612dcf0bE8891608f/65f90b5d317ec1cd.jpg!cr_1053x420_4_0!q70.jpg.dpg",
            },
          ]}
          onPress={(index: number) => handleBanner(index)}
          isSeamlessScroll={true}
          indicatorGroupPosition={"center"}
        />
      </View>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  swiper: {
    width: "100%",
  },
});
