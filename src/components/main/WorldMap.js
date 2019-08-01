import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { getRooms /* initializePlayer */ } from "../../actions";
import { forEachNode } from "../../utils/rooms";

import { theme1 } from "../../styles/theme";

function MainPage(props) {
  const { rooms, getRooms } = props;

  const worldMap = useRef(null);
  const container = useRef(null);

  console.log(container);

  let canvas_width = 500; // container.current && container.current.offsetWidth;
  let canvas_height = 500; //container.current && container.current.offsetHeight;
  console.log({ canvas_width, canvas_height });

  useEffect(() => {
    getRooms();
  }, [getRooms]);

  useEffect(() => {
    const drawRooms = () => {
      if (!worldMap.current) {
        return;
      }

      const ctx = worldMap.current.getContext("2d");
      ctx.lineWidth = 1;
      ctx.strokeStyle = "red";

      function draw(room) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = "red";
        let x = room.y * (canvas_width / 10);
        let y = room.x * (canvas_height / 10);

        if (room.x === 10 && room.y === 10) {
          ctx.fillStyle = "red";
          console.log({ room });
        } else {
          ctx.fillStyle = theme1.silverSand;
        }

        ctx.strokeRect(x, y, canvas_width / 12, canvas_height / 12);
        ctx.fillRect(x, y, canvas_width / 12, canvas_height / 12);

        // if (room.n_to !== null) {

        // }
        // if (room.w_to !== null) {

        // }

        ctx.lineWidth = 20;
        ctx.strokeStyle = theme1.silverSand;

        let roomCenter = [x + canvas_width / 24, y + canvas_height / 24];
        if (room.e_to !== null) {
          ctx.moveTo(...roomCenter);
          ctx.lineTo(roomCenter[0] + canvas_width / 10, roomCenter[1]);
          ctx.stroke();
        }
        if (room.s_to !== null) {
          ctx.moveTo(...roomCenter);
          ctx.lineTo(roomCenter[0], roomCenter[1] + canvas_height / 10);
          ctx.stroke();
        }
      }

      function drawText(room) {
        let x = room.y * (canvas_width / 10) - 12;
        let y = room.x * (canvas_height / 10);
        let roomCenter = [x + canvas_width / 24, y + canvas_height / 24];

        ctx.fillStyle = "red";
        ctx.fillText(room.id + 108, ...roomCenter);
      }

      if (rooms.length > 0) {
        forEachNode(rooms, draw);
        // forEachNode(rooms, drawText);
        // rooms.forEach(drawText);
        // rooms.forEach(draw);
      }
    };

    drawRooms();
  }, [rooms, canvas_width, canvas_height]);

  return (
    <Map>
      <div ref={container} className="map-container">
        <canvas ref={worldMap} width={canvas_width} height={canvas_height} />
      </div>
    </Map>
  );
}

export default connect(
  state => ({
    rooms: state.player.rooms
    // player: state.player.player
  }),
  {
    getRooms
    // initializePlayer
  }
)(MainPage);

const Map = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  border: 1px solid red;

  color: white;
  background: ${theme1.onyx};

  padding: 10px;

  .map-container {
    border: 1px solid blue;
    width: 100%;
    height: 100%;

    canvas {
      width: 100%;
      height: 100%;
    }
  }
`;
