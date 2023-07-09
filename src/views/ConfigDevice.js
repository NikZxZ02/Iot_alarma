import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Switch, Slider } from "@rneui/themed";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("http://192.168.4.21:3000");

export default function ConfigDevice({ route }) {
  const [isActive, setIsActive] = useState(false);
  const [sensibility, setSensibility] = useState(24);
  const navigation = useNavigation();
  const [value, setValue] = useState(0);

  const { icon } = route.params;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://iot.ceisufro.cl:8080/api/plugins/telemetry/DEVICE/7c010540-1551-11ee-b199-3d650e5455ce/values/timeseries?key=vibration",
        {
          headers: {
            "Content-Type": "application/json",
            "X-Authorization":
              "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuLnBlcmVpcmEwMUB1ZnJvbWFpbC5jbCIsInNjb3BlcyI6WyJURU5BTlRfQURNSU4iXSwidXNlcklkIjoiNzg4ZjU1MTAtMDA3Zi0xMWVlLWIxOTktM2Q2NTBlNTQ1NWNlIiwiZmlyc3ROYW1lIjoiTmljb2xhcyIsImxhc3ROYW1lIjoiUGVyZWlyYSIsImVuYWJsZWQiOnRydWUsImlzUHVibGljIjpmYWxzZSwidGVuYW50SWQiOiJiZDg4OTE2MC0wMDdkLTExZWUtYjE5OS0zZDY1MGU1NDU1Y2UiLCJjdXN0b21lcklkIjoiMTM4MTQwMDAtMWRkMi0xMWIyLTgwODAtODA4MDgwODA4MDgwIiwiaXNzIjoidGhpbmdzYm9hcmQuaW8iLCJpYXQiOjE2ODg4NDk3NzIsImV4cCI6MTY4ODg1ODc3Mn0.mA9nAVpJSnea0_EGjNMOzCxgfUTZ5eFEh6GD_VqIiuBbFs9C28Mn-oOAd88yW0OtgkzeMDixVgIguoQKPxLerA",
          },
        }
      );

      if (response.status === 200) {
        setValue(response.data.vibration[0].value);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Conectado al servidor socket");
    });

    socket.on("message", (data) => {
      const result = JSON.parse(data);
      const { client } = result;
      setValue(client.value);
    });

    socket.on("disconnect", () => {
      console.log("Desconectado del servidor socket");
    });

    // Limpia el socket al desmontar el componente
    return () => {
      socket.disconnect();
    };
  }, []);

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

      {/* sensibilidad */}
      <View className="grow justify-center items-center">
        <Text className="text-7xl font-bold">{value}</Text>
        <Text>Valor</Text>
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
            maximumTrackTintColor="#f2f2f2"
          />
        </View>
      </View>
    </View>
  );
}
