import { StyleSheet, Text, View } from "react-native";
import React from "react";


interface MyComponentProps{
    title?:string
}

const MyComponent = ({ title }:MyComponentProps) => {
  return (
    <View>
      <Text style={{ color: "white", fontSize: 24 }}>{title}</Text>
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({});
