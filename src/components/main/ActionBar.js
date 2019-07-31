import React from "react";
import styled from "styled-components";
import { theme1 } from "../../styles/theme";

function ActionBar(props) {
  return (
    <Bar>
      <p>You did some thing and some stuff happened</p>
    </Bar>
  );
}

export default ActionBar;

const Bar = styled.div`
  color: white;
  background: ${theme1.taupe};

  height: 60px;
  padding: 0 35px;

  display: flex;
  align-items: center;

  p {
    font-size: 2rem;
  }
`;
