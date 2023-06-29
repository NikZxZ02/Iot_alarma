import { TouchableOpacity, Text } from "react-native";

/**
 * Componente que muestra un boton con texto
 * @param {String} text - texto del boton
 * @param {Function} onPress - funcion que se ejecuta al presionar el boton
 */
export default function Button({ text, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-primary h-12 w-full items-center justify-center rounded-lg"
    >
      <Text className="text-black font-bold uppercase">{text}</Text>
    </TouchableOpacity>
  );
}
