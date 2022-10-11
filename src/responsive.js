import { css } from "styled-components";
const mobile = (props) => {
  return css`
    @media only screen and (max-width: 415px) {
      ${props}
    }
  `;
};

const tablet = (props) => {
  return css`
    @media only screen and (max-width: 686px) {
      ${props}
    }
  `;
};
export { mobile, tablet };
