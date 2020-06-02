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
 *  padding-top: 1rem; // Will apply to xs(0px) and up
 *
 *  ${MediaQuery.md`
 *    padding-top: 2rem; // Will apply to md(960px) devices and up
 *  `}
 *
 *  ${MediaQuery.lg`
 *    padding-top: 3rem; // Will apply to lg(1280px) devices and up
 *  `}
 * `;
 * ```
 */
const MediaQuery = Object.keys(Breakpoints).reduce((accumulator, size) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = Breakpoints[size] / 16;

  accumulator[size] = (...args) => css`
    @media screen and (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default MediaQuery;
