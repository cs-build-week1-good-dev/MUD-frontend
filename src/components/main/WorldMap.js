import React, { Component } from "react";
import styled from "styled-components";

import { theme1 } from "../../styles/theme";

class MainPage extends Component {
  render() {
    return (
      <Map>
        <h1>Dis A Nice Map</h1>
      </Map>
    );
  }
}

export default MainPage;

const Map = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  background: ${theme1.onyx};

  display: flex;
  align-items: center;
  justify-content: center;
`;
