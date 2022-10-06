import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import auth from "@react-native-firebase/auth";

function SignInScreen({ isSignedIn, setSignedIn }) {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState("");

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
      setSignedIn(true);
      // alert("login success");
    } catch (error) {
      console.log("Invalid code.");
    }
  };

  const signInWithPhoneNumber = async (phoneNumber) => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    // const currentUser = await auth().currentUser;
    setConfirm(confirmation);
  };

  if (!confirm) {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number with Country code"
          value={phoneNumber}
          onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
        />
        <Button
          title="Phone Number Sign In"
          onPress={() => signInWithPhoneNumber("+923054042027")}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={code}
        onChangeText={(text) => setCode(text)}
      />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default SignInScreen;
