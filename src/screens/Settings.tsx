import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Login } from "../redux/actions/AuthAction";
// import

function SettingsScreen() {
  const count = useSelector((state: any) => state.auth.signedIn);
  const dispatch: any = useDispatch();

  useEffect(() => {
    console.log("count on first render", count);
  }, []);

  useEffect(() => {
    console.log("count is ", count);
  }, [count]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        onPress={() => dispatch(Login())}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      {/* <button aria-label="Increment value" onClick={() => dispatch(Login())}>
        Increment
      </button> */}

      <Text>Settings!</Text>
    </View>
  );
}

export default SettingsScreen;
