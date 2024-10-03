import { faker } from "@faker-js/faker/.";

import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import StoryItem from "../StoryItem/StoryItem";

interface Story {
  id: string;
  avatar: string;
  username: string;
}

const stories = Array<number>(40)
  .fill(0)
  .map<Story>(
    () =>
      ({
        id: faker.string.uuid(),
        avatar: faker.image.avatar(),
        username: faker.person.firstName(),
      } as Story)
  );

const StoryList = () => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      ListHeaderComponent={Header}
      data={stories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <StoryItem {...item} />}
    />
  );
};

export default StoryList;

const styles = StyleSheet.create({});

const Header = () => {
  return (
    <View
      style={{
        width: 60,

        height: 60,
        marginRight: 5,
        marginTop: 10,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: "gray",
        borderStyle: "dashed",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 40,
          color: "gray",
        }}
      >
        +
      </Text>
    </View>
  );
};
