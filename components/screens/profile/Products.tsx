import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { IProduct } from "./IProduct";
import ProductItem from "./ProductItem";

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      // fetch("https://dummyjson.com/products")
      //   .then((response) => response.json())
      //   .then((json) => console.log(json));
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await res.json();

        setProducts(json.products);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);


  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductItem {...item} />}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
