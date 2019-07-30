import styled from "styled-components";
import { colors, theme1 } from "./theme.js";

export const Button = styled.button.attrs(({ bg, fg, shadow, ...props }) => ({
  ...props,
  bg: bg || theme1.silverSand,
  fg: fg || theme1.onyx,
  shadow: shadow || colors.dusk
}))`
  background: ${props => props.bg};
  color: ${props => props.fg};
  border: none;
  padding: 15px 32px;
  margin: 0 auto;
  display: block;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: box-shadow 0.3s;
  position: relative;
  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const ButtonSmall = styled(Button)`
  padding: 6px 10px;
  font-size: 1rem;
  display: inline-block;
  margin: 0;
`;

export const ButtonSmallSubtle = styled(ButtonSmall)`
  background: transparent;
  color: ${theme1.onyx};
  transition: background 0.2s, color 0.2s;
  font-weight: normal;
  &:hover {
    background: ${props => props.bg};
    color: ${theme1.onyx};
    box-shadow: none;
  }
`;

export const LandingButton = styled.button.attrs(
  ({ bg, fg, shadow, ...props }) => ({
    ...props,
    bg: bg || colors.forest,
    fg: fg || colors.white,
    shadow: shadow || colors.dusk
  })
)`
  background: ${props => props.bg};
  color: ${props => props.fg};
  width: 50%;
  border: none;
  padding: 15px 32px;
  margin: 8px auto;
  display: block;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: box-shadow 0.3s;
  position: relative;
  &:hover {
    box-shadow: 0 0 10px ${props => props.shadow} inset;
  }
`;
