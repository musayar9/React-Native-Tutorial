import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "./Colors";
import { IProduct } from "./IProduct";
import AntDesign from "@expo/vector-icons/AntDesign";
// type ProductItemProps = {
//   title: string;
//   thumbnail: string;
//   description: string;
//   price:number;
//   rating:number;
//   category:string
// };

const ProductItem = ({
  title,
  thumbnail,
  description,
  price,
  rating,
  category,
}: IProduct) => {
  return (
    <View
      style={{
        justifyContent: "center",
        marginVertical: 10,
        marginHorizontal: 10,
        gap:20
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{title}</Text>
      <ImageBackground
        imageStyle={{ borderRadius: 40 }}
        source={{ uri: thumbnail }}
        style={{ width: "100%", height: 300 }}
      >
        <View
          style={{ flex: 1, backgroundColor: Colors.imagebg, borderRadius: 40 }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: Colors.categoryBg,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              justifyContent: "center",
              alignItems: "flex-end",
              paddingRight: 20,
            }}
          >
            <Text
              style={{
                color: "white",

                fontWeight: "bold",
              }}
            >
              {category}
            </Text>
          </View>
          <View style={{ flex: 5 }}></View>
          <View
            style={{
              flex: 1,

              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:Colors.imagebg,
              borderBottomLeftRadius:40,
              borderBottomRightRadius:40
            }}
          >
            <Text
              style={{
                color: "white",
                paddingRight: 5,
                justifyContent: "center",
                alignItems: "flex-end",
                fontWeight: "bold",
                marginRight: 40,
                fontSize: 15,
              }}
            >
              $ {price}
            </Text>
            <View
              style={{
                paddingRight: 5,
                justifyContent: "center",
                alignItems: "center",
              flexDirection:"row",
                gap: 4,
              }}
            >
              <AntDesign name="star" size={24} color="white" />
              <Text
                style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
              >
                {rating}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <Text style={{ fontSize: 15, color: Colors.smoothText }}>
        {description}
      </Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
