import { Image, StyleSheet, Platform } from "react-native";

import RootNavigation from "@/components/navigation/RootNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NameContextProvider } from "@/components/screens/context/NameContext";
export default function HomeScreen() {
  return (
    <GestureHandlerRootView>
    <NameContextProvider>
    
      <RootNavigation />
    </NameContextProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
