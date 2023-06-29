import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Button from "../components/Button";

export default function Landing() {
  return (
    <View className="flex-1 bg-white flex flex-col">
      <StatusBar style="light" translucent />
      <View className="w-full h-1/3 bg-primary rounded-b-[25px]" />

      <View className="grow py-10 px-6 flex flex-col justify-between">
        <View className="w-full flex flex-col items-center ">
          <Image source={require("../../assets/images/app-logo.png")} />
          <Text className="text-5xl font-bold mt-5">SecureShaker</Text>
          <Text>Protege tu hogar de otra forma</Text>
        </View>
        <Button text="Comenzar" onPress={() => {}} />
      </View>
    </View>
  );
}
