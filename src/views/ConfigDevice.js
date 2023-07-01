import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ConfigDevice() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white py-10 px-6 flex-col">
      <StatusBar style="dark" translucent />

      {/* header */}
      <View className="py-4 flex-row items-center">
        <TouchableOpacity
          activeOpacity={0.1}
          className="w-1/5"
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons name="chevron-left" size={30} color="black" />
        </TouchableOpacity>
        <View className="w-3/5 flex-row justify-center">
          <Text className="text-lg font-bold">Puerta Delantera</Text>
        </View>
      </View>

      {/* device */}
      <View className="p-4 bg-[#f2f2f2d2] rounded-lg">
        <View className="flex-row items-center justify-between mb-4">
          <TouchableOpacity
            activeOpacity={0.1}
            className="bg-primary p-2 rounded-full"
          >
            <MaterialCommunityIcons name="lamp" size={24} color="black" />
          </TouchableOpacity>
          <Text>Luz</Text>
        </View>
        <View>
          <Text className="text-lg font-semibold">Alarma</Text>
          <Text>1 dispositivo</Text>
        </View>
      </View>

      {/* sensibilidad */}
      <View className="grow justify-center items-center">
        <Text className="text-7xl font-bold">24</Text>
        <Text>Sensibilidad</Text>
      </View>
    </View>
  );
}
