import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./src/navigation/AppStack";
import AuthStack from "./src/navigation/AuthStack";
import SplashScreen from "./src/screens/SplashScreen";
import TabNavigation from "./src/navigation/TabNavigation";
import TopNavigator from "./src/navigation/TopNavigation";
import auth from "@react-native-firebase/auth";
import DrawerNavigation from "./src/navigation/DrawerNavigation";

const App = () => {
  // let isSignedIn = auth().currentUser;
  const [isSignedIn, setSignedIn] = useState("");
  // if (authData.uid) {
  // let signout = auth().signOut();
  // let authData = auth().currentUser;

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <TabNavigation />
      ) : (
        <AuthStack isSignedIn={isSignedIn} setSignedIn={setSignedIn} />
      )}
    </NavigationContainer>
  );
};

export default App;
