import React from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import Root from "./navigation/Root";

// 스플래시 스크린 유지 메소드
SplashScreen.preventAutoHideAsync();

export default function App() {
     //api 호출
     const [assets] = useAssets([require("./assets/HelloWorld.png")]);
     const [loaded] = Font.useFonts(Ionicons.font);

     if (assets && loaded) {
          SplashScreen.hideAsync();
     }

     return (
          <NavigationContainer>
               <Root />
          </NavigationContainer>
     );
}
