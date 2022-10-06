import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignIn";

const Stack = createStackNavigator();

const AuthStack = ({ isSignedIn, setSignedIn }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn">
        {(props) => (
          <SignInScreen
            {...props}
            isSignedIn={isSignedIn}
            setSignedIn={setSignedIn}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
