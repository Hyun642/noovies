import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movie";
import Search from "../screens/Search";
import Tv from "../screens/Tv";
import { useColorScheme } from "react-native";
import { LIGTH_GREY, YELLOW_COLOR } from "../color";

const Tab = createBottomTabNavigator();

const Tabs = () => {
     const isDark = useColorScheme() === "dark";
     return (
          <Tab.Navigator
               screenOptions={{
                    tabBarStyle: {
                         backgroundColor: isDark ? "black" : "white",
                    },
                    tabBarActiveTintColor: isDark ? YELLOW_COLOR : "black",
                    tabBarInactiveTintColor: isDark ? "white" : LIGTH_GREY,
                    headerStyle: {
                         backgroundColor: isDark ? "black" : "white",
                    },
                    headerTitleStyle: { color: isDark ? "white" : "black" },
               }}
          >
               <Tab.Screen name="Movies" component={Movies} />
               <Tab.Screen name="Tv" component={Tv} />
               <Tab.Screen name="Search" component={Search} />
          </Tab.Navigator>
     );
};

export default Tabs;
