import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" translucent />

      <View className="py-10">
        <Text>Home</Text>
      </View>
    </View>
  );
}
