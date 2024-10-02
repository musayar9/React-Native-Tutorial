import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "../screens";
import Home from "../screens/home/Home";
import Profile from "../screens/profile/Profile";

const Stack = createNativeStackNavigator();
const UserStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default UserStack;
