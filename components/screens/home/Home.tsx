import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { faker } from "@faker-js/faker/.";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import StoryList from "./StoryList/StoryList";
import PostList from "./PostList/PostList";
interface Resource {
  url: string;
  id: string;
}

// içerisinde 20 tane resim olan dizi
const images = Array<number>(20)
  .fill(0)
  .map<Resource>(
    () =>
      ({
        id: faker.string.uuid(),
        url: faker.image.urlPicsumPhotos(),
      } as Resource)
  );

const Home = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 50 }}>
      {/* <StatusBar /> */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 20,
          borderBottomWidth: 1,
          borderBottomColor: "gray",
          paddingVertical: 5,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>Home</Text>
        {/* <Button title="Profile" onPress={() => nav.navigate("Profile")} />
         */}

        <TouchableOpacity
          style={styles.button} // Butonun stili
          onPress={() => nav.navigate("Profile")} // Butona basılınca navigasyon
        >
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>

        <Text>
          <MaterialIcons name="notifications-none" size={34} color="black" />
        </Text>
      </View>

      {/* <FlatList
        data={images}
        //instagramdki hikaye gibi yan yana kaydırma yapmak için
        horizontal={true}
        //scroll bar görümtülemek istemyorsak
        showsVerticalScrollIndicator={false}
        // eğer listenini horizontal durumda ise
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.url }}
            style={{ width: 60, height: 60, margin: 5, borderRadius: 30 }}
          />
        )}
      /> */}

      <View style={{marginBottom:20}}>
        <StoryList />
      </View>

      <View style={{ flex: 1 }}>
        <PostList />
      </View>
    </SafeAreaView>
  );
};

export default Home;

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
