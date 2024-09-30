import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

interface CounterProps {
  start: number;
  step: number;
}

const Counter = ({ start, step }: CounterProps) => {
  const [count, setCount] = useState<number>(start);

  const increment = () => {
    setCount(count + step);
  };
  const decrement = () => {
    setCount(count - step);
  };
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
        {count}
      </Text>
      <Button title="increase" onPress={increment} />
      <Button title="decrease" onPress={decrement} />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    width: 350,
    padding: 15,
    margin: 5,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ee55dd",
  },
});
