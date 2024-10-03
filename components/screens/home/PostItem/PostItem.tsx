import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Post } from "../PostList/PostList";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const PostItem: React.FC<Post> = (props) => {
  const { id, userAvatar, userName, description, image, likes, comments } =
    props;
  return (
    <View
      style={{
        width: "100%",
        height: 400,
        shadowColor: "gray",
        marginBottom: 10,
      }}
    >
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Image
              source={{ uri: userAvatar }}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
          </View>
          <View style={{ flex: 5, justifyContent: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>{userName}</Text>
          </View>

          <View style={{ flex: 1, justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "gray",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="dots-vertical"
                size={26}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flex: 5 }}>
        <Text>{description}</Text>
        <Image
          source={{ uri: image }}
          style={{
            width: "100%",
            height: 200,
            borderRadius: 20,
            marginVertical: 10,
          }}
        />
      </View>
      <View style={{ flex: 1, marginTop:5 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, flexDirection: "row", gap: 4 }}>
            <FontAwesome6 name="heart" size={30} color="gray" />
            <Text style={{ color: "gray", fontSize: 20 }}>{likes}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", gap: 4 }}>
            <FontAwesome name="comment" size={30} color="gray" />
            <Text style={{ color: "gray", fontSize: 20 }}>{comments}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <FontAwesome name="share-alt" size={30} color="gray" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({});
