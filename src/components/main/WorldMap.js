import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { getRooms, initializePlayer } from "../../actions";
import { forEachNode } from "../../utils/rooms";

import { theme1 } from "../../styles/theme";

function MainPage(props) {
  const { rooms, loc_x, loc_y, getRooms, initializePlayer } = props;

  const worldMap = useRef(null);
  const container = useRef(null);

  let canvas_width = container.current && container.current.offsetWidth;
  let canvas_height = container.current && container.current.offsetHeight;

  useEffect(() => {
    getRooms();
    initializePlayer();
  }, [getRooms, initializePlayer]);

  useEffect(() => {
    if (!worldMap.current) {
      return;
    }
    const ctx = worldMap.current.getContext("2d");

    function clear() {
      ctx.fillStyle = theme1.onyx;
      ctx.fillRect(0, 0, worldMap.current.width, worldMap.current.height);
    }

    function drawRoom(room) {
      // get room top left coords
      let x = room.x * (canvas_width / 10) + 6;
      let y = room.y * (canvas_height / 10) + 6;

      // get center of the room
      let roomCenter = [x + canvas_width / 24, y + canvas_height / 24];

      // fill in
      ctx.fillStyle = theme1.silverSand;
      ctx.fillRect(x, y, canvas_width / 12, canvas_height / 12);

      // set context
      ctx.lineWidth = 20;
      ctx.strokeStyle = theme1.silverSand;

      if (room.e_to !== null) {
        // ctx.fillStyle = "blue";
        // ctx.strokeStyle = "blue";
        ctx.moveTo(...roomCenter);
        ctx.lineTo(roomCenter[0] + canvas_width / 10, roomCenter[1]);
        ctx.stroke();
      }

      if (room.s_to !== null) {
        // ctx.strokeStyle = "red";
        ctx.moveTo(...roomCenter);
        ctx.lineTo(roomCenter[0], roomCenter[1] + canvas_height / 10);
        ctx.stroke();
      }
    }

    function drawText(room) {
      let x = room.x * (canvas_width / 10) - 12;
      let y = room.y * (canvas_height / 10);
      let roomCenter = [x + canvas_width / 24, y + canvas_height / 24];

      ctx.fillStyle = theme1.onyx;
      ctx.fillText(room.id + 184, ...roomCenter);
    }

    function drawPlayer() {
      if (props.loc_x === null || props.loc_y === null) {
        return;
      }

      let x = loc_x * (canvas_width / 10);
      let y = loc_y * (canvas_height / 10);
      let [cx, cy] = [x + 6 + canvas_width / 24, y + 6 + canvas_height / 24];

      // console.log({ cx, cy });
      var gradient = ctx.createRadialGradient(cx, cy, 30, cx, cy, 150);
      // console.log(gradient);

      // Add three color stops
      gradient.addColorStop(0, "transparent");
      gradient.addColorStop(0.2, "rgba(20,30,20, .3)");
      gradient.addColorStop(0.4, "rgba(20,30,20, .9)");

      gradient.addColorStop(1, "rgb(0, 10, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas_width, canvas_height);

      ctx.beginPath();
      ctx.strokeStyle = theme1.onyx;
      ctx.lineWidth = 10;
      ctx.arc(cx, cy, 5, 0, 2 * Math.PI);
      ctx.stroke();
    }

    if (rooms.length > 0) {
      // clear();
      forEachNode(rooms, drawRoom);
      // rooms.forEach(drawRoom);
      // rooms.forEach(drawText);/
      drawPlayer();
    }
  }, [rooms, canvas_width, canvas_height, loc_x, loc_y]);

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
    rooms: state.player.rooms,
    name: state.player.name,
    loc_x: state.player.x_coordinate,
    loc_y: state.player.y_coordinate,
    title: state.player.title
    // player: state.player.player
  }),
  {
    getRooms,
    initializePlayer
  }
)(MainPage);

const Map = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;

  color: white;
  background: ${theme1.nightGreen};

  .map-container {
    /* border: 1px solid blue; */
    width: 100%;
    height: 90vh;

    canvas {
      width: 100%;
      height: 100%;
    }
  }
`;
