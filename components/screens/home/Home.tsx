import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo, useState } from "react";
import { useNavigation } from "expo-router";
import { faker } from "@faker-js/faker/.";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import StoryList from "./StoryList/StoryList";
import PostList, { MemorizedPostList } from "./PostList/PostList";
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
  
  // const MemorizedPostList = memo(()=>{
  //   return (
  //   <PostList/>
  //   )
  // })

const Home = () => {
  const nav = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 50 }}>
      <StatusBar />
      {/* Activity Indicator loading animasyonu sunar */}
      {/* <ActivityIndicator size="large" color={"red"}/> */}
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

      <View style={{ marginBottom: 20 }}>
        <StoryList />
      </View>

      <View style={{ flex: 1 }}>

      <MemorizedPostList/>
      </View>

      <Modal
        transparent
        visible={isModalVisible}
        onRequestClose={() => {}}
        animationType="slide"
      >
        <View
          style={{
            backgroundColor: "#ebebeb",
            position: "absolute",
            height: 300,
            bottom: 0,
            width: "100%",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        >
          <Pressable
            onPress={() => setIsModalVisible(false)}
            style={{
              width: 300,
              height: 50,
              backgroundColor: "rgba(68,51,232,1)",
              alignSelf: "center",
              borderRadius: 30,
              margin: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>CLOSE</Text>
          </Pressable>
        </View>
      </Modal>

      <Pressable
        onPress={() => setIsModalVisible(!isModalVisible)}
        style={{
          width: 300,
          height: 50,
          backgroundColor: "rgba(68,51,232,1)",
          alignSelf: "center",
          borderRadius: 30,
          margin: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Touch</Text>
      </Pressable>
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
