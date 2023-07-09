import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Profile() {
  return (
    <View className="flex-1 bg-white py-10 px-6">
      <Text className="text-4xl font-bold py-4">Perfil</Text>
      <View className="items-center">
        <MaterialCommunityIcons name="home-account" size={120} color="#888888" />
        <Text className="mt-3 text-3xl font-bold">Juan Perez</Text>
        <Text className="text-gray-500">juanperez@ufrontera.cl</Text>
      </View>

      <View className="mt-10">
        <Text className="text-2xl font-bold">Informacion Personal</Text>
        <View className="mt-4">
          <Text className="text-lg font-bold">Tipo de cuenta:</Text>
          <Text className="text-lg">Plan Basico</Text>
        </View>
        <View className="mt-2">
          <Text className="text-lg font-bold">Direccion Hogar:</Text>
          <Text className="text-lg">Francisco Salazar #01145</Text>
        </View>
      </View>
    </View>
  );
}
