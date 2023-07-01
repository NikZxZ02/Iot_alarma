import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import ConfigDevice from "../views/ConfigDevice";
import HomeTabs from "../navigation/HomeTabs";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName="HomeTabs"
    >
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="ConfigDevice" component={ConfigDevice} />
    </Stack.Navigator>
  );
}
