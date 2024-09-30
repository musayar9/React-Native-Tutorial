import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "../screens";

const Stack = createNativeStackNavigator();
const UserStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
    <Stack.Screen name="Home" component={HomePage}/>
    </Stack.Navigator>
  );
};

export default UserStack;
