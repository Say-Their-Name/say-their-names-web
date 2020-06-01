import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    margin: 2rem;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
