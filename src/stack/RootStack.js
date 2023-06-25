import { createStackNavigator } from "@react-navigation/stack";
import Home from "../views/Home/Home";

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
