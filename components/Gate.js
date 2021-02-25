import React from "react";
import { View, Text } from "react-native";

export default () => {
  const isLoggedIn = false;
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {isLoggedIn ? <Text>Welcome</Text> : <Text>Login please</Text>}
    </View>
  );
};
