import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "../screens";
import Home from "../screens/home/Home";
import Profile from "../screens/profile/Profile";
import ContextData from "../screens/context/ContextData";

const Stack = createNativeStackNavigator();
const UserStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Context"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Context" component={ContextData} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default UserStack;
