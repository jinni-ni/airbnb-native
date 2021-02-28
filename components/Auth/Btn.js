import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";
import propTypes from "prop-types";
import colors from "../../colors";
const { width, height } = Dimensions.get("screen");

const Button = styled.View`
margin-bottom: 10px;
border: 1px solid ${(props) => (props.accent ? "transparent" : colors.black)}
border-radius: 30px;
  padding: 15px 0px;
  align-items: center;
  width: ${width / 1.5}px;
  background-color: ${(props) => (props.accent ? colors.red : "transparent")};
`;
const Text = styled.Text`
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => (props.accent ? "white" : colors.black)};
`;

const Btn = ({ onPress, text, accent = false }) => (
  <TouchableOpacity onPress={onPress}>
    <Button accent={accent}>
      <Text accent={accent}>{text}</Text>
    </Button>
  </TouchableOpacity>
);

Btn.propTypes = {
  onPress: propTypes.func.isRequired,
  text: propTypes.string.isRequired,
  accent: propTypes.bool,
};

export default Btn;
