import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Story from '../screens/Story';
import Contact from '../screens/Contact';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Story" component={Story} />
      <Stack.Screen name="ContactUS" component={Contact} />
    </Stack.Navigator>
  );
};

export default AppStack;
