import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { faker } from "@faker-js/faker/.";

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
    <SafeAreaView style={{ flex: 1,  marginTop: 50 }}>
      {/* <StatusBar /> */}

      <FlatList
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
      />

      {/* <Button title="Profile" onPress={() => nav.navigate("Profile")} /> */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
