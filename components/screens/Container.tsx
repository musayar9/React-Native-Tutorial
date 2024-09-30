import { StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
  width: number;
  height: number;
  variant: "primary" | "warning" | "error";
}>;

const Container = ({ width, height, variant, children }: ContainerProps) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: width,
        height: height,
        borderRadius: width / 2,
        margin: 5,
        backgroundColor:
          variant === "primary"
            ? "#04be"
            : variant === "warning"
            ? "#ee5500"
            : "#cb1b1b",
      }}
    >
      {children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({});
