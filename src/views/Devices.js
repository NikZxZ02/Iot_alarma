import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Devices() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" translucent />

      <View className="py-10">
        <Text>Devices</Text>
      </View>
    </View>
  );
}
