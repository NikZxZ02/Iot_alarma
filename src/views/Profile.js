import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Profile() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" translucent />

      <View className="py-10">
        <Text>Profile</Text>
      </View>
    </View>
  );
}
