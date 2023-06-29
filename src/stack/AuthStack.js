import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../views/Landing";
import Login from "../views/Login";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Landing"
    >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
