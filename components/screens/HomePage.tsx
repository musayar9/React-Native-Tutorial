import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Switch,
  Modal,
} from "react-native";
import Box from "./Box";
import { IUser, useFakeUserData } from "@/useFakeUserData";
import User from "./User";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import Foo from "./Foo";
import CounterTwo from "./CounterTwo";

const HomePage = () => {
  // const greet = () =>
  //   Alert.alert("Attentiton", "Any Message...", [
  //     {
  //       text: "Yes",
  //       onPress: () => console.log("Yes button was pressed"),
  //     },
  //     { text: "No", onPress: () => console.log("No button was pressed") },
  //   ]);
  const users: IUser[] = useFakeUserData();

  const onLongPress = () => Alert.alert("Long Pressed....");

  const [isSwitchEnabled, setIsSwitchEnabled] = useState<boolean>(false);

  const [name, setName] = useState<string>("");

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Button
        title="Press Mew"
        color={"orange"}
        onPress={() => Alert.alert("Button was clicked")}
      />

      <MyComponent title={"Musa Sayar "} />
      <MyComponent title={"I learn react native"} />
      <MyComponent />

      <Counter start={100} step={5}/>
      <Counter start={200} step={10}/> */}
      {/* <Container width={200} height={400} variant="primary">
        <Container width={50} height={50} variant="warning">
          <Text>Abce</Text>
        </Container>
      </Container> */}
      {/* <Container width={100} height={200} variant="warning" />
      <Container width={100} height={200} variant="error" /> */}

      {/* <Button title="click me" onPress={greet} /> */}

      {/* FlexBox yapısı */}
      {/* <View style={{ flex: 1, backgroundColor: "#f9dd3f" }}>
        <View style={{ flex: 2, backgroundColor: "#f9863f" }}></View>
        <View style={{ flex: 1, backgroundColor: "#373767" }}></View>
        <View style={{ flex: 2, backgroundColor: "#3f4bf9" }}></View>
      </View>
      <View style={{ flex: 3, backgroundColor: "#aff93f" }}></View> */}

      {/* <View style={{flex:1, backgroundColor:"red"}}></View>
      <View style={{flex:1, backgroundColor:"blue"}}></View>
      <View style={{flex:1, backgroundColor:"orange"}}></View>  */}

      {/* image */}

      {/* <Image
        style={{ width: 200, height: 200, borderRadius: 100 }}
        source={{
          uri: "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
        }}
      />
      <Image
        style={{ width: 200, height: 200, borderRadius: 100 }}
        source={require("@/assets/images/person.webp")}
      /> */}

      {/* ScrollView */}
      {/* <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={{ width: "100%" }}
      >
        <Box />
        <Box />
        <Box />
        <Box />
      </ScrollView> */}

      {/* TouchableOpacity */}
      {/* <TouchableOpacity onPress={()=>Alert.alert("pressed....")} onLongPress={onLongPress}>
        <Image
          style={{ width: 200, height: 200, borderRadius: 100 }}
          source={{
            uri: "https://bilisimkitabi.com/portal/upload/post/5f70e0ee34c8a_7-react-native.jpg",
          }}
        />
      </TouchableOpacity> */}

      {/*   
      
      {users?.map((e)=>(
      <Text style={{fontSize:24}} key={e?.id}>{e?.name}</Text>
      ))} */}

      {/* Scroll View */}

      {/* <StatusBar/>
      <ScrollView>
        {users?.map((e) => (
          <User key={e.id} user={e} />
        ))}
      </ScrollView> */}

      {/* <ImageBackground source={(require("@/assets/images/maimi.jpg"))}
      style={{width:300, height:300, }}
      imageStyle={{borderRadius:12}}
      >
      <Button title="Like At" onPress={()=>Alert.alert("Like atıldı")}/>
      </ImageBackground> */}

      {/* switch */}
      {/* <Switch
        thumbColor={isSwitchEnabled ? "#4b0097" : "red"}
        trackColor={{ true: "#6d0dcc", false: "#ff9d9d" }}
        ios_backgroundColor={"#ff9d9d"}
        value={isSwitchEnabled}
        onChange={() => setIsSwitchEnabled(!isSwitchEnabled)}
      />

      <Button
        title="Göster"
        onPress={() =>
          console.log(isSwitchEnabled ? "Aktif edildis" : "pasif edilidi")
        }
      /> */}

      {/* text ınput */}
      {/* 
      <TextInput
        style={{
          width: 200,
          height: 50,
          backgroundColor: "#e4e4e4",
          borderRadius: 12,
          padding: 10,
          margin: 10,
          fontSize: 20,
          fontWeight: "bold",
        }}
        multiline
        placeholder="isminzi girin"
        value={name}
        onChangeText={(e) => setName(e)}
      />
      <Button title="Show" onPress={() => Alert.alert("Dikkaat!", name)} /> */}

      {/* Modal */}

      {/* <Button title="Open Modal" onPress={() => {setIsModalVisible(true)}} />
      <Modal transparent visible={isModalVisible} onRequestClose={() => {}} animationType="slide">
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
        <Button  title="Close" onPress={()=>setIsModalVisible(false)}/>
        </View>
      </Modal> */}
      {/* <Foo/> */}
      <CounterTwo start={100} />
      <CounterTwo start={300} />
    </SafeAreaView>
  );
};

export default HomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#b3b2fd",
  },
  textOne: {
    fontSize: 24,
    color: "red",
  },
});
