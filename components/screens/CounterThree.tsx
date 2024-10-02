import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

type CounterState = {
  count: number;
};

export default class CounterThree extends Component<{}, CounterState> {
  state: Readonly<CounterState> = {
    count: 100,
  };

  componentDidMount(): void {
    //component ekrana render olmadan hemen önce çalışır
    console.log("componentDidMount çalışıyor....");
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<CounterState>,
    snapshot?: any
  ): void {
  // burası state değeri her değiştiğinde çalışacak
  
  console.log("componentDidUpdate çalışıyor...")
  }

  componentWillUnmount(): void {
  // COMPONENTIN EKRANDAN YOK OLMASI DURUMDA ÇALIŞACAK OLAN YAPI
  console.log("componentWillUnmount çalışıyor")
  }

  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
          width: 200,
          height: 200,
          borderRadius: 20,

          backgroundColor: "#4b0097",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 36 }}>
          {" "}
          {this.state.count}{" "}
        </Text>
        <Button
          title="Increase"
          onPress={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
