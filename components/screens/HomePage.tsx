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
import Counter from "./Counter";
import Container from "./Container";

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Button
        title="Press Mew"
        color={"orange"}
        onPress={() => Alert.alert("Button was clicked")}
      />

      <MyComponent title={"Musa Sayar "} />
      <MyComponent title={"I learn react native"} />
      <MyComponent />

      <Counter start={100} step={5}/>
      <Counter start={200} step={10}/> */}
      <Container width={200} height={400} variant="primary">
        <Container width={50} height={50} variant="warning">
          <Text>Abce</Text>
        </Container>
      </Container>
      {/* <Container width={100} height={200} variant="warning" />
      <Container width={100} height={200} variant="error" /> */}
    </SafeAreaView>
  );
};

export default HomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4b0097",
  },
  textOne: {
    fontSize: 24,
    color: "red",
  },
});
