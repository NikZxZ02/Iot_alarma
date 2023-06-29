import { useState } from "react";
import { View, Text, StatusBar, Image } from "react-native";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const onChangeEmail = (text) => {
    setEmail(text);
  };

  const onChangePassword = (text) => {
    setPassword(text);
  };

  const handleLogin = () => {
    // navigate to home page
  };

  return (
    <View className="flex-1 py-16 px-6 gap-y-8">
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />

      <View className="flex-row items-center">
        <Image
          source={require("../../assets/images/app-logo.png")}
          className="w-10 h-10 object-cover"
        />
        <Text className="ml-2 text-4xl font-bold">SecureShaker</Text>
      </View>

      {/* form */}
      <View>
        <Text className="text-lg font-semibold mb-4">INICIAR SESIÓN</Text>
        <TextInput
          placeholder={"Email"}
          value={email}
          onChangeText={onChangeEmail}
        />
        <TextInput
          secureTextEntry={true}
          placeholder={"Contraseña"}
          value={password}
          onChangeText={onChangePassword}
        />

        <Button text={"Iniciar Sesión"} onPress={handleLogin} />
      </View>
    </View>
  );
}
