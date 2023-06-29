import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" translucent />
      <View className="w-full h-1/2 bg-primary rounded-b-[25px]" />

      <View>
        <Text>Home</Text>
      </View>
    </View>
  );
}
