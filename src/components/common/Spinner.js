import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import PropTypes from "prop-types";

import Color from "../../constants/Color";

const StyledSpinner = styled.div`
  height: ${(props) => (props.height ? props.height : "100vh")};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Spinner = ({ height }) => (
  <StyledSpinner height={height}>
    <Loader type="TailSpin" color={Color.PRIMARY} height={50} />
  </StyledSpinner>
);

export default Spinner;

Spinner.defaultProps = {
  height: "100vh",
};

Spinner.propTypes = {
  height: PropTypes.string,
};
