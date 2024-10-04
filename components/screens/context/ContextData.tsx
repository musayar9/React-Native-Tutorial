import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useState } from "react";
import { NameContext } from "./NameContext";

const MyComponent = () => {
  const nameContext = useContext(NameContext);
  const [enter, setEnter] = useState<string>("");
  return (
    <View>
      <TextInput
        style={{
          width: 300,
          height: 40,
          borderRadius: 20,
          backgroundColor: "gray",
          color: "black",
          textAlign: "center",
        }}
        value={enter}
        onChangeText={(e) => setEnter(e)}
      />
      <Button
        title="Clikc Me"
        onPress={() => {
          nameContext.setName(enter);
        }}
      />
    </View>
  );
};

const Inner = () => {
  const nameContext = useContext(NameContext);
  return (
    <View>
      <Text>{nameContext.name}</Text>
    </View>
  );
};

const ContextData = () => {
  const myContext = useContext(NameContext);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{myContext.name}</Text>
      <Inner />

      <MyComponent />
    </View>
  );
};

export default ContextData;

const styles = StyleSheet.create({});
