import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./src/navigation/AppStack";
import AuthStack from "./src/navigation/AuthStack";
import SplashScreen from "./src/screens/SplashScreen";
import TabNavigation from "./src/navigation/TabNavigation";
import TopNavigator from "./src/navigation/TopNavigation";

function App() {
  // let isSignedIn = auth().currentUser;
  const [isSignedIn, setSignedIn] = useState(null);

  // if (authData.uid) {
  // let signout = auth().signOut();
  // let authData = auth().currentUser;
  // console.log("current user test", authData.uid);
  // } else {
  //   console.log("no login user available");
  // }

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <TabNavigation />
      ) : (
        <AuthStack isSignedIn={isSignedIn} setSignedIn={setSignedIn} />
      )}
    </NavigationContainer>
  );
}

export default App;
