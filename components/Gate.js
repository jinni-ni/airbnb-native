import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "../redux/userSlice";

// const Gate = (props) => {
export default () => {
  const { isLoggedIn } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  console.log(isLoggedIn);
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      {isLoggedIn ? (
        <TouchableOpacity onPress={() => dispatch(logOut())}>
          <Text>Logout</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => dispatch(logIn("bs.token"))}>
          <Text>Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

// const mapStateToProps = (state) => {
//   console.log(state);
//   return { isLoggedIn: false };
// };

// export default connect(mapStateToProps)(Gate);
