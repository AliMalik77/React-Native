import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./src/navigation/AppStack";
import AuthStack from "./src/navigation/AuthStack";
import SplashScreen from "./src/screens/SplashScreen";
import TabNavigation from "./src/navigation/TabNavigation";
import TopNavigator from "./src/navigation/TopNavigation";
import auth from "@react-native-firebase/auth";
import DrawerNavigation from "./src/navigation/DrawerNavigation";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import DropdownComponent from "./src/components/Dropdown";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";

//Api for user serach
// https://api.github.com/search/users?q=AliMalik77

//Api for repo search
//https://api.github.com/search/repositories?q=Address-Book

const App = () => {
  // let isSignedIn = auth().currentUser;
  const [isSignedIn, setSignedIn] = useState("");
  // if (authData.uid) {
  // let signout = auth().signOut();
  // let authData = auth().currentUser;

  return (
    <Provider store={store}>
      <NavigationContainer>
        {!isSignedIn ? (
          <Search />
        ) : (
          <AuthStack isSignedIn={isSignedIn} setSignedIn={setSignedIn} />
        )}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
