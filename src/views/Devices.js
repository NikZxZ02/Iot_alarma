import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Devices() {
  return (
    <View className="flex-1 bg-white py-10 px-6">
      <Text className="text-4xl font-bold py-4">Dispositivos</Text>

      <View className="flex-row items-center my-6">
        <Image
          source={require("../../assets/images/ESP8266.jpg")}
          className="w-32 h-32 mr-2"
        />
        <View className="w-64">
          <Text className="text-lg font-bold">ESP8266</Text>
          <Text className="flex-wrap">El ESP8266 es un microcontrolador con Wi-Fi integrado utilizado en proyectos de IoT. Es de bajo costo y consumo de energía.</Text>
        </View>
      </View>

      <View className="flex-row items-center my-6">
        <Image
          source={require("../../assets/images/DFRobot.jpg")}
          className="w-32 h-32 mr-2"
        />
        <View className="w-64">
          <Text className="text-lg font-bold">DFR0027 DFRobot</Text>
          <Text className="flex-wrap">El DFR0027 es un sensor de vibracion compatible con dispositivos Arduino, su ventaja es poseer un conector de gran calidad.</Text>
        </View>
      </View>
    </View>
  );
}
