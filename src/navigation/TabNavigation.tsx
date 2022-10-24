import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Contact from "../screens/Contact";
import SettingsScreen from "../screens/Settings";
import Search from "../screens/Search";
import RepoSearch from "../screens/RepoSearch";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="User"
        component={Search}
        options={{
          tabBarLabel: "User",
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons name="account" size={30} color="red" />
            );
          },
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Repository"
        component={RepoSearch}
        options={{
          tabBarLabel: "Repository",
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name="folder-open-outline"
                size={30}
                color="red"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
