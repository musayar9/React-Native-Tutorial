import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IUser, useFakeUserData } from "@/useFakeUserData";

const User = ({ user }: { user: IUser }) => {
  const { name, surname, avatar, email, messages } = user;
  return (
    <View style={{ width: "100%", height: 90, flexDirection: "row" }}>
      <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={{ uri: avatar }}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
      </View>
      <View style={{ flex: 4, justifyContent: "center" }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          {name} {surname}
        </Text>
        <Text style={{ color: "gray", fontSize: 13 }}>{email}</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {messages > 0 && (
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#4b0097",
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {messages}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
