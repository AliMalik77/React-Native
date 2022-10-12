import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Contact from "../screens/Contact";
import SettingsScreen from "../screens/Settings";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons name="contacts" size={30} color="red" />
            );
          },
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name="cog-outline"
                size={30}
                color="red"
              />
            );
          },
          // tabBarBadge: 1,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
