import { css } from "styled-components";
import Breakpoints from "../constants/Breakpoints";

/**
 * Media Query Helper
 * @description
 * A little CSS helper for writing media queries.
 * Uses a mobile-first approach (min-width).
 * @example
 * ```js
 * const StyledBox = styled.div`
 *  padding-top: 1rem; // Will apply to mobile and up
 *
 *  ${mediaQuery.tablet`
 *    padding-top: 2rem; // Will apply to tablet and up
 *  `}
 *
 *  ${mediaQuery.desktop`
 *    padding-top: 3rem; // Will apply to desktop and up
 *  `}
 * `;
 * ```
 */
export const MediaQuery = Object.keys(Breakpoints).reduce(
  (accumulator, device) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = Breakpoints[device] / 16;

    accumulator[device] = (...args) => css`
      @media screen and (min-width: ${emSize}em) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);
