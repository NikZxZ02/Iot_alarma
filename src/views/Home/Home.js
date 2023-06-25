import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Home</Text>
      <StatusBar style="auto" />
    </View>
  );
}
