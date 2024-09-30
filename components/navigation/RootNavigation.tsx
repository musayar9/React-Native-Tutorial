import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import UserStack from "./UserStack";

const RootNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <UserStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
