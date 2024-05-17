import React from "react";
import { Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";

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
               <Tabs />
          </NavigationContainer>
     );
}
