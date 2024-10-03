import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

type StoryItemProps = {
  avatar: string;
  username: string;
};

const StoryItem = ({ avatar, username }: StoryItemProps) => {
  return (
    <View>
      <Image
        style={{
          width: 60,
          backgroundColor: "#4b0097",
          height: 60,
          marginRight: 5,
          marginTop: 10,
          borderRadius: 30,
          borderWidth: 1,
     
        }}
        source={{ uri: avatar }}
      />
      <Text style={{ fontSize: 10, fontWeight: "bold", textAlign: "center" }}>
        {username}
      </Text>
    </View>
  );
};

export default StoryItem;

const styles = StyleSheet.create({});
