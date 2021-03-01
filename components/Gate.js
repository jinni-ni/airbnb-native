import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "../redux/userSlice";
import { NavigationContainer } from "@react-navigation/native";
import Auth from "../navigation/Auth";
import Main from "../navigation/Main";

// const Gate = (props) => {
export default () => {
  const { isLoggedIn } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  // console.log(isLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ? <Main /> : <Auth />}
    </NavigationContainer>
  );
};

// const mapStateToProps = (state) => {
//   console.log(state);
//   return { isLoggedIn: false };
// };

// export default connect(mapStateToProps)(Gate);
