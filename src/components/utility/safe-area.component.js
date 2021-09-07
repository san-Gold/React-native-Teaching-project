import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin: ${(props) => props.theme.space[2]} 0;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
