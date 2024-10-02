import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

const Home = () => {
  const nav = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>

      {/* <Button title="Profile" onPress={()=>nav.navigate("Profile")}/> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
