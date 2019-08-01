import { colors, theme1 } from "./theme.js";
import styled from "styled-components";

export const Card = styled.div.attrs(({ bg, shadow, ...props }) => ({
  ...props,
  bg: bg || theme1.taupe,
  shadow: shadow || colors.thunderhead
}))`
  padding: 20px;
  border-radius: 10px;
  background: ${props => props.bg};
  color: ${colors.white};
  box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthCard = styled(Card)`
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
`;
