import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 50 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 20,
        }}
      >
        <Text>Profile</Text>

        <TouchableOpacity
          style={styles.button} // Butonun stili
          onPress={() => nav.navigate("Home")} // Butona basılınca navigasyon
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
      
      
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "transparent", // Arka plan rengi kaldırıldı
    // İstediğiniz renk
  },
  buttonText: {
    color: "#007AFF", // Metnin rengi (özelleştirilebilir)
    fontSize: 16,
  },
});
