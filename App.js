import React from 'react';
import {Pressable, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Home from './src/screens/Home';
// import Story from './src/screens/Story';
// import Contact from './src/screens/Contact';
// import SignInScreen from './src/screens/SignIn';
// import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';

// const Stack = createStackNavigator();

const isSignedIn = true;
function App() {
  return (
    <NavigationContainer>
      {isSignedIn ? <AppStack /> : <AuthStack />}
      {/* <AuthStack /> */}

      {/* <Stack.Navigator>
        {isSignedIn
          ? (console.log('asdasad'),
            (
              <>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Story" component={Story} />
                <Stack.Screen name="ContactUS" component={Contact} />
              </>
            ))
          : (console.log('false0'),
            (
              <>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
              </>
            ))}
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
