import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeDeviceItem from "./components/HomeDeviceItem";
import { io } from "socket.io-client";
import { useDispatch } from "react-redux";
import { setDevice, setIsLoadingDevice } from "../../slices/deviceSlice";
import { Notifications } from "expo";


const DEVICES = [
  { id: 1, lugar: "Puerta Delantera" },
  { id: 2, lugar: "Puerta Trasera" },
  { id: 3, lugar: "Puerta Principal" },
  { id: 4, lugar: "Ventana cuarto" },
  { id: 5, lugar: "Ventana comedor" },
];

const socket = io("https://iot-vibration-api.onrender.com");
const showAlert = (title, message, type) => {
  Alert.alert(title, message, [
    {
      text: "Entendido",
      style: type === "error" ? "cancel" : "default",
    },
  ]);
};

export default function Home() {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoadingDevice(true));
    socket.on("connect", () => {
      console.log("Conectado al servidor socket");
    });

    socket.on("message", (data) => {
      const result = JSON.parse(data);
      const { client } = result;
      setValue(client.value);

      dispatch(setDevice({ value: client.value }));
      dispatch(setIsLoadingDevice(false));

      if (client.value > 100) {
        sendNotification();
      }
    });

    socket.on("disconnect", () => {
      console.log("Desconectado del servidor socket");
    });

    // Limpia el socket al desmontar el componente
    return () => {
      socket.disconnect();
    };
  }, []);

  const addDevice = () => {
    showAlert(
      "Maximo de dispositivos alcanzado",
      "Su plan solo permite conectar un maximo de 5 dispositivos",
      "warning"
    );
  };

  const sendNotification = async () => {
    const notificationContent = {
      title: "Alarma activada",
      body: `The client value (${value}) has exceeded the threshold.`,
    };

    // Send the notification using Expo's Notifications API
    await Notifications.presentLocalNotificationAsync(notificationContent);
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
