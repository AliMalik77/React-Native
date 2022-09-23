import React, {useState} from 'react';
import {Pressable, View, Text} from 'react-native';

function Story() {
  const [signedIn, isSignedIn] = useState(false);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Our Story</Text>
    </View>
  );
}

export default Story;
