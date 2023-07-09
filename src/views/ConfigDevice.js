import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Switch, Slider } from "@rneui/themed";
import { useSelector } from "react-redux";
import { selectValue } from "../slices/deviceSlice";

const getColorClass = (deviceValue) => {
  if (deviceValue > 50) {
    return "bg-[#ff5b55ef]";
  } else if (deviceValue > 30) {
    return "bg-[#ff5b55ef]";
  } else if (deviceValue > 10) {
    return "bg-[#ff6e55ef]";
  } else if (deviceValue > 5) {
    return "bg-[#ff9455ef]";
  } else {
    return "bg-[#f2f2f2d2]";
  }
};

export default function ConfigDevice({ route }) {
  const [isActive, setIsActive] = useState(false);
  const [sensibility, setSensibility] = useState(24);
  const navigation = useNavigation();
  const { icon } = route.params;
  const { value: deviceValue } = useSelector(selectValue);

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

      <View className="flex-1 flex-col">
        {/* device */}
        <View className="p-4 bg-[#f2f2f2d2] rounded-lg mb-4">
          <View className="flex-row items-center justify-between mb-4">
            <TouchableOpacity
              activeOpacity={0.1}
              className="bg-primary p-2 rounded-full"
            >
              <MaterialCommunityIcons name={icon} size={24} color="black" />
            </TouchableOpacity>
            <Switch
              value={isActive}
              onValueChange={setIsActive}
              color="#34E0A1"
            />
          </View>
          <View>
            <Text className="text-lg font-semibold">Alarma</Text>
            <Text>1 dispositivo</Text>
          </View>
        </View>

        {/* device value */}
        <View
          className={`p-4 ${getColorClass(
            deviceValue
          )} rounded-lg mb-4 grow justify-center items-center`}
        >
          <Text className="text-7xl font-bold">{deviceValue}</Text>
          <Text>Estado de la alarma</Text>
        </View>

        {/* sensibilidad */}
        <View className="p-4 bg-[#f2f2f2d2] rounded-lg mb-4 grow justify-center items-center">
          <Text className="text-7xl font-bold">{sensibility}</Text>
          <Text>Sesnsibilidad</Text>
          <View className="py-6 w-full justify-center">
            <Slider
              value={sensibility}
              onValueChange={setSensibility}
              maximumValue={100}
              minimumValue={0}
              step={1}
              allowTouchTrack
              trackStyle={{ height: 60 }}
              thumbStyle={{
                height: 10,
                width: 20,
                backgroundColor: "transparent",
              }}
              minimumTrackTintColor="#34E0A1"
              maximumTrackTintColor="#fff"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
