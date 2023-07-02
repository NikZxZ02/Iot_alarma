import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Switch } from "@rneui/themed";

/**
 * Componente que muestra los dispositivos de la casa
 *
 * Props
 * - index: posicion del dispositivo en el arreglo
 * - max: largo del arreglo
 * - lugar: Lugar donde se encuentra instalado el dispositivo
 */
export default function HomeDeviceItem({ index, max, lugar }) {
  const [isActive, setIsActive] = useState(false);
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("ConfigDevice");
  };

  return (
    <TouchableOpacity
      className={`grow rounded-lg p-4 bg-gray-100 mb-2 ${
        index !== max - 1 ? (index % 2 === 0 ? "mr-2" : "ml-2") : "mr-0 ml-0"
      }`}
      onPress={handlePress}
    >
      <View className="flex-row items-center justify-between">
        <MaterialCommunityIcons name="lamp" size={24} color="black" />
        <Switch value={isActive} onValueChange={setIsActive} color="#34E0A1" />
      </View>
      <Text className="mt-4">{lugar}</Text>
    </TouchableOpacity>
  );
}
