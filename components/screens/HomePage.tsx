import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
} from "react-native";
import MyComponent from "./MyComponent";

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Press Mew"
        color={"orange"}
        onPress={() => Alert.alert("Button was clicked")}
      />

      <MyComponent title={"Musa Sayar "}/>
      <MyComponent title={"I learn react native"}/>
      <MyComponent />
    </SafeAreaView>
  );
};

export default HomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4b0097",
  },
  textOne: {
    fontSize: 24,
    color: "red",
  },
});
