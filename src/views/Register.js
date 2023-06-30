import { useState } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const onChangeName = (text) => {
    setName(text);
  };

  const onChangeEmail = (text) => {
    setEmail(text);
  };

  const onChangePassword = (text) => {
    setPassword(text);
  };

  const handleRegister = () => {
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
        <Text className="text-lg font-semibold mb-4">REGISTRATE</Text>
        <TextInput
          placeholder={"Nombre"}
          value={name}
          onChangeText={onChangeName}
        />
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
        <View className="mb-4 flex-row justify-end">
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="flex-row"
          >
            <Text className="text-xs">Si ya tienes cuenta, {""}</Text>
            <Text className="text-xs underline">Inicia tu sesion</Text>
          </TouchableOpacity>
        </View>
        <Text className="mb-4 text-xs opacity-60">
          Al seleccionar "Crear Cuenta", significa que aceptas los Terminos de
          Servicios y Politica de Privacidad
        </Text>

        <Button text={"Crear Cuenta"} onPress={handleRegister} />
      </View>
    </View>
  );
}
