import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { getRooms } from "../../actions";

import { theme1 } from "../../styles/theme";

function MainPage(props) {
  const { rooms, getRooms } = props;

  const worldMap = useRef(null);

  useEffect(() => {
    getRooms();
  }, [getRooms]);

  useEffect(() => {
    const drawRooms = () => {
      if (!worldMap.current) {
        return;
      }

      const ctx = worldMap.current.getContext("2d");
      ctx.fillStyle = theme1.silverSand;
      for (let room of rooms) {
        let x = room.x * 24;
        let y = room.y * 24;

        ctx.fillRect(x, y, 20, 20);
      }
    };

    drawRooms();
  }, [rooms]);

  return (
    <Map id="world-map">
      <h1>Dis A Nice Map</h1>
      <canvas ref={worldMap} width={800} height={535} />
    </Map>
  );
}

export default connect(
  state => ({
    rooms: state.player.rooms
  }),
  {
    getRooms
  }
)(MainPage);

const Map = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  color: white;
  background: ${theme1.onyx};
`;
