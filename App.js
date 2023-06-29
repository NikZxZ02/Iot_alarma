import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/stack/RootStack";
import AuthStack from "./src/stack/AuthStack";

export default function App() {
  const session = false;
  return (
    <NavigationContainer>
      {session ? <RootStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
