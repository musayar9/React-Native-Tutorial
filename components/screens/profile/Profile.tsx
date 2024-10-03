import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Profile = () => {
const nav = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile</Text>
      <Button title="Home" onPress={() => nav.navigate("Home")} />
    </View>
  );
}

export default Profile

const styles = StyleSheet.create({})