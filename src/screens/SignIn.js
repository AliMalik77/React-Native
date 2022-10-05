import React, { useContext, useState } from "react";
import {
  Pressable,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import { authContext } from "../../App";

function SignInScreen({ navigate }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log("testing signin");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(username) => setUsername(username)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry
      />
      {/* <Button title="Sign in" onPress={() => signIn({username, password})} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default SignInScreen;
