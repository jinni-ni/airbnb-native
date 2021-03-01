import React from "react";
import { StatusBar, KeyboardAvoidingView, Keyboard } from "react-native";
import styled from "styled-components/native";
import Btn from "../../../components/Auth/Btn";
import Input from "../../../components/Auth/Input";
import DismissKeyboard from "../../../components/DismissKeyboard";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 20px;
`;

export default ({ email, setEmail, password, setPassword, handleSubmit }) => (
  <DismissKeyboard>
    <Container>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView behavior="position">
        <InputContainer>
          <Input
            value={email}
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            stateFn={setEmail}
          />
          <Input
            value={password}
            placeholder="Password"
            isPassword={true}
            stateFn={setPassword}
          />
        </InputContainer>
        <Btn text={"Sign In"} accent onPress={handleSubmit}></Btn>
      </KeyboardAvoidingView>
    </Container>
  </DismissKeyboard>
);
