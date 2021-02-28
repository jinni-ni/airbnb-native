import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "../redux/userSlice";
import { NavigationContainer } from "@react-navigation/native";
import Auth from "../navigation/Auth";

// const Gate = (props) => {
export default () => {
  const { isLoggedIn } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  // console.log(isLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <TouchableOpacity
          onPress={() => dispatch(logOut())}
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      ) : (
        <Auth />
      )}
    </NavigationContainer>
  );
};

// const mapStateToProps = (state) => {
//   console.log(state);
//   return { isLoggedIn: false };
// };

// export default connect(mapStateToProps)(Gate);
