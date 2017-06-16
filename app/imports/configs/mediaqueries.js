import { css } from 'styled-components';

// we are mobile first. Design always for mobile per default
const sizes = {
  desktop: 1024,
  tablet: 768,
};

// Iterate through the sizes and create a media template
/* eslint no-param-reassign: 0*/
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
`;
  return acc;
}, {});
