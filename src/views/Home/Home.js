import { useCallback, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeDeviceItem from "./components/HomeDeviceItem";

const DEVICES = [
  { id: 1, lugar: "Puerta Delantera" },
  { id: 2, lugar: "Puerta Trasera" },
  { id: 3, lugar: "Puerta Principal" },
  { id: 4, lugar: "Ventana cuarto" },
  { id: 5, lugar: "Ventana comedor" },
];

export default function Home() {
  const addDevice = () => {
    console.log("add device");
  };

  return (
    <View className="flex-1 bg-white py-10 px-6">
      <StatusBar style="dark" translucent />

      <View className="py-4 flex-row items-center justify-between">
        <Text className="text-4xl font-bold">Mi Casa</Text>
        <TouchableOpacity
          onPress={addDevice}
          className="p-2 rounded-full bg-primary"
        >
          <MaterialCommunityIcons name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View className="flex-col">
        <Text className="mb-2 text-xl font-medium">
          Dispositivos Registrados
        </Text>

        <FlatList
          className="w-full"
          data={DEVICES}
          renderItem={({ item, index }) => (
            <HomeDeviceItem
              key={item.id}
              index={index}
              max={DEVICES.length}
              {...item}
            />
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{
            gap: 10,
          }}
        />
      </View>
    </View>
  );
}
