import { keyframes, css } from 'styled-components'

export const DisplayBlock = css`
  display: block;
  transform: scale(1);
`

export const HiddenBlock = css`
  display: none;
  transform: scale(0);
  height: auto;
`

export const SlideStateSideFromRight = keyframes`
  0% {
    right: -75px;
    ${HiddenBlock};
  }

  1% {
    transform: scale(1);
  }

  100% {
    right: 0;
    ${DisplayBlock};
  }
`

export const SlideStateSideFromLeft = keyframes`
  0% {
    left: -75px;
    ${HiddenBlock};
  }

  1% {
    transform: scale(1);
  }

  100% {
    left: 0;
    ${DisplayBlock};
  }
`

const styleDisplay = css`
  1% {
    transform: scale(1);
  }

  100% {
    margin-top: inherit;
    ${DisplayBlock};
  }
`

export const SlideStateTop = keyframes`
  0% {
    margin-top: 200px;
    ${HiddenBlock};
  }

  ${styleDisplay};
`

export const OverlayModalTop = keyframes`
  0% {
    margin-top: 70%;
    ${HiddenBlock};
  }

  ${styleDisplay};
`

export const ScaleSection = keyframes`
  0% {
    display: none;
    height: 0;
    opacity: 0;
  }

  60% {
    height: auto;
    display: block;
  }

  100% {
    height: auto;
    display: block;
    opacity: 1;
  }
`

export const SlideStateDown = keyframes`
  0% {
    margin-top: inherit;
    display: block;
  }

  95% {
    transform: scale(1);
  }

  100% {
    margin-top: 100%;
    ${HiddenBlock};
  }
`
export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`

export const scaleIn = keyframes`
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
`

export const scaleOut = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
`
