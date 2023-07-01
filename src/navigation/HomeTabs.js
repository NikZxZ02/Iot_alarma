import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../views/Home/Home";
import Profile from "../views/Profile";
import Devices from "../views/Devices";

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarItem,
        tabBarIconStyle: styles.tabBarIcon,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name="view-dashboard"
                size={24}
                color="white"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Devices"
        component={Devices}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons name="devices" size={24} color="white" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons name="account" size={24} color="white" />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "black",
    height: 60,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  tabBarItem: {
    color: "white",
  },
  tabBarIcon: {
    color: "white",
  },
});
