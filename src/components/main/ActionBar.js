import React from "react";
import styled from "styled-components";
import { theme1 } from "../../styles/theme";

function ActionBar(props) {
  return (
    <Bar>
      <div className="action-status">
        <p>You did some thing and some stuff happened</p>
      </div>
      <div className="actions">
        <button>W</button>
        <button>N</button>
        <button>S</button>
        <button>E</button>
      </div>
    </Bar>
  );
}

export default ActionBar;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  color: white;
  background: ${theme1.taupe};

  p {
    font-size: 2rem;
  }

  .action-status {
    width: 80%;
    padding: 0 25px;
  }
  .actions {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    width: 20%;
    min-width: 100px;
    background: ${theme1.lumber};
    color: ${theme1.onyx};
    height: 100%;
    padding: 0 25px;

    button {
      background: none;
      border: none;
      transition: 0.4s ease-in;

      &:hover {
        cursor: pointer;
        color: ${theme1.darkSeaGreen};
        box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;
