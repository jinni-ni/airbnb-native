import React from "react";
import styled from "styled-components/native";

const Container = styeld.view`
    justify-content: center;
    align-text: center;
`;

const Text = styled.Text``;

export default () => (
  <Container>
    <Text>Saved</Text>
  </Container>
);
