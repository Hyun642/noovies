import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movie";
import Search from "../screens/Search";
import Tv from "../screens/Tv";
import { useColorScheme } from "react-native";
import { LIGTH_GREY, YELLOW_COLOR } from "../color";
import { Ionicons } from "@expo/vector-icons";

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
                    tabBarLabelStyle: {
                         fontSize: 13,
                         fontWeight: "600",
                         marginTop: -10,
                    },
               }}
          >
               <Tab.Screen
                    name="Movies"
                    component={Movies}
                    options={{
                         tabBarIcon: ({ focused, color, size }) => {
                              console.log(focused, color, size);
                              return <Ionicons name={focused ? "film" : "film-outline"} color={color} size={size} />;
                         },
                    }}
               />
               <Tab.Screen
                    name="Tv"
                    component={Tv}
                    options={{
                         tabBarIcon: ({ focused, color, size }) => {
                              console.log(focused, color, size);
                              return <Ionicons name="tv" color={color} size={size} />;
                         },
                    }}
               />
               <Tab.Screen
                    name="Search"
                    component={Search}
                    options={{
                         tabBarIcon: ({ focused, color, size }) => {
                              console.log(focused, color, size);
                              return (
                                   <Ionicons name={focused ? "search" : "search-outline"} color={color} size={size} />
                              );
                         },
                    }}
               />
          </Tab.Navigator>
     );
};

export default Tabs;
