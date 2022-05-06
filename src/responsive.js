import { css } from "styled-components";

export const mobileS = (props) => {
  return css`
    @media only screen and (max-width: 377px) {
      ${props}
    }
  `;
};

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 426px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 769px) {
      ${props}
    }
  `;
};

export const desktop = (props) => {
  return css`
    @media only screen and (max-width: 1400px) {
      ${props}
    }
  `;
};
