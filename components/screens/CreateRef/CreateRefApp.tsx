import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { createRef } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
const CreateRefApp = () => {
  const scrollRef = createRef<ScrollView>();

  const numbers = Array<number>(10)
    .fill(0)
    .map((e, index) => index);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView ref={scrollRef}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 10,
          }}
        >
          {numbers.map((_, index) => (
            <MyComponent key={index} />
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity 
      onPress={()=>{
      scrollRef.current?.scrollTo({y:0, animated:true})
      }}
      
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: "#007bff",
          position: "absolute",
          bottom: 20,
          right: 20,
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <AntDesign name="upcircleo" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default CreateRefApp;

const MyComponent = () => {
  return (
    <View
      style={{
        width: 300,
        height: 150,
        backgroundColor: "gray",
        borderRadius: 40,
        marginBottom: 10,
      }}
    ></View>
  );
};

const styles = StyleSheet.create({});
