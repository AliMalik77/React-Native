import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import Home from "../screens/Home";
// import Story from "../screens/Story";
// import Contact from "../screens/Contact";
// import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="home" size={30} color="red" />;
          },
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="home" size={30} color="red" />;
          },
          tabBarBadge: 1,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
