import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";

const ScreenOne = ({ navigation: { navigate } }) => (
     <TouchableOpacity
          onPress={() => {
               navigate("Two");
          }}
     >
          <Text>go to Two</Text>
     </TouchableOpacity>
);
const ScreenTwo = ({ navigation: { navigate } }) => (
     <TouchableOpacity
          onPress={() => {
               navigate("Three");
          }}
     >
          <Text>go to Three</Text>
     </TouchableOpacity>
);
const ScreenThree = ({ navigation: { goBack, setOptions } }) => (
     <>
          <TouchableOpacity
               onPress={() => {
                    goBack();
               }}
          >
               <Text>go back Two</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOptions({ title: "hi" })}>
               <Text>Hi</Text>
          </TouchableOpacity>
     </>
);

const NativeStack = createNativeStackNavigator();

const Stack = () => (
     <NativeStack.Navigator screenOptions={{ headerTitleAlign: "center", animation: "flip" }}>
          <NativeStack.Screen name="One" component={ScreenOne} />
          <NativeStack.Screen name="Two" component={ScreenTwo} />
          <NativeStack.Screen name="Three" component={ScreenThree} />
     </NativeStack.Navigator>
);

export default Stack;
