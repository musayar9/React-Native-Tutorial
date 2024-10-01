import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
  Image,
} from "react-native";

const HomePage = () => {
  // const greet = () =>
  //   Alert.alert("Attentiton", "Any Message...", [
  //     {
  //       text: "Yes",
  //       onPress: () => console.log("Yes button was pressed"),
  //     },
  //     { text: "No", onPress: () => console.log("No button was pressed") },
  //   ]);
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
      {/* <Container width={200} height={400} variant="primary">
        <Container width={50} height={50} variant="warning">
          <Text>Abce</Text>
        </Container>
      </Container> */}
      {/* <Container width={100} height={200} variant="warning" />
      <Container width={100} height={200} variant="error" /> */}

      {/* <Button title="click me" onPress={greet} /> */}

      {/* FlexBox yapısı */}
      {/* <View style={{ flex: 1, backgroundColor: "#f9dd3f" }}>
        <View style={{ flex: 2, backgroundColor: "#f9863f" }}></View>
        <View style={{ flex: 1, backgroundColor: "#373767" }}></View>
        <View style={{ flex: 2, backgroundColor: "#3f4bf9" }}></View>
      </View>
      <View style={{ flex: 3, backgroundColor: "#aff93f" }}></View> */}

      {/* <View style={{flex:1, backgroundColor:"red"}}></View>
      <View style={{flex:1, backgroundColor:"blue"}}></View>
      <View style={{flex:1, backgroundColor:"orange"}}></View>  */}

      {/* image */}

      <Image
        style={{ width: 200, height: 200, borderRadius: 100 }}
        source={{
          uri: "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
        }}
      />
      <Image
        style={{ width: 200, height: 200, borderRadius: 100 }}
        source={require("@/assets/images/person.webp")}
      />
    </SafeAreaView>
  );
};

export default HomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b3b2fd",
  },
  textOne: {
    fontSize: 24,
    color: "red",
  },
});
