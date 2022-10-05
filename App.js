import React from "react";
// import "react-native-gesture-handler";
import { Pressable, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import Home from './src/screens/Home';
// import Story from './src/screens/Story';
// import Contact from './src/screens/Contact';
// import SignInScreen from './src/screens/SignIn';
// import AuthStack from './src/navigation/AuthStack';
import AppStack from "./src/navigation/AppStack";
import AuthStack from "./src/navigation/AuthStack";
import { Provider } from "react-redux";
import SplashScreen from "./src/screens/SplashScreen";
import TabNavigation from "./src/navigation/TabNavigation";
import TopNavigator from "./src/navigation/TopNavigation";
// import DrawerNavigator from "./src/navigation/DrawerNavigation";

const isSignedIn = false;

function App() {
  console.log("Hi testing");
  return (
    <NavigationContainer>
      {isSignedIn ? <TopNavigator /> : <SplashScreen />}
    </NavigationContainer>
  );
}

export default App;
