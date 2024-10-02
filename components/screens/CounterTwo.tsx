import React, { Component } from "react";
import { Button, Text, View } from "react-native";

type CounterProps = {
  start: number;
};

type CounterState = {
  count: number;
};
export class CounterTwo extends Component<CounterProps, CounterState> {
  state: Readonly<CounterState> = {
    count: this.props.start,
  };

  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 200,
          backgroundColor: "#4b0097",
          margin: 20,
          borderRadius: 20,
   marginTop:50
        }}
      >
        <Text style={{ fontWeight: "900", fontSize: 36, color:"white" }}>
          {this.state.count}
        </Text>
        <Button
          title="increase"
          onPress={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        />
      </View>
    );
  }
}

export default CounterTwo;
