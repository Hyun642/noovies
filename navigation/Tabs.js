import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movie";
import Search from "../screens/Search";
import Tv from "../screens/Tv";
import { View, Text, TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => 
    <Tab.Navigator 
        screenOptions={{   // 모든 스크린에 적용 옵션
            tabBarLabelPosition:"beside-icon", // 레이블 위치 변경
            tabBarActiveTintColor: "red", // 선택된 레이블 색깔
            tabBarInactiveTintColor: "blue", // 선택안된 레이블 색깔
            tabBarStyle: {
                backgroundColor: "yellow"
            },
            tabBarLabelStyle: { // 레이블 스타일
                backgroundColor: "gray"
            },

            headerRight: () => (
                <TouchableOpacity style={{
                    backgroundColor: "gray"
                    }}>
                        <Text>Hi</Text>
                </TouchableOpacity>)  
        }}
    >
        <Tab.Screen name="Movies" component={Movies} 
            options={{  // 해당 스크린 적용 옵션
            tabBarBadge: 5, // 탭바 알림 배지 메시지 (숫자, 문자)
            tabBarLabelStyle: { // 해당 레이블 스타일
                backgroundColor: "pink"
            }
                }}/>
        <Tab.Screen name="Tv" component={Tv}/>
        <Tab.Screen name="Search" component={Search} options={{ // 해당 스크린 적용 옵션
                title:"검색", // 헤더 타이틀
                headerTitleStyle: { color: "red"} //헤더 스타일
        }}/>
    </Tab.Navigator>

export default Tabs;