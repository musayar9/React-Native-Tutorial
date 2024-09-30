import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textOne}>
        Hello World
        <Text>I learn react native</Text>
      </Text>

      <View
        style={{ width: 100, height: 100, backgroundColor: "black" }}
      ></View>
      <View style={{ width: 100, height: 100, backgroundColor: "gray" }}></View>
    </View>
  );
};

export default HomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffdf80",
  },
  textOne: {
    fontSize: 24,
    color: "red",
  },
});
