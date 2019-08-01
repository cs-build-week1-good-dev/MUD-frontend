import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { getRooms } from "../../actions";

import { theme1 } from "../../styles/theme";

function MainPage(props) {
  const { rooms, getRooms } = props;

  useEffect(() => {
    props.getRooms();
  }, [getRooms]);

  console.log(rooms);

  return (
    <Map>
      <h1>Dis A Nice Map</h1>
      {rooms ? (
        rooms.map(room => <div>`JSON.stringify(room)`</div>)
      ) : (
        <div>No Rooms?</div>
      )}
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
