import styled, { createGlobalStyle } from 'styled-components'

import { theme } from '@habx/thunder-ui'

const FONT_ROOT = 'https://cdn.habx.fr/assets/fonts'

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Inter UI;
    color: ${theme.get('neutral')};
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  
  a {
    text-decoration: none;
  }
  

  @font-face {
    font-family: "Inter UI";
    font-style: normal;
    font-weight: 400;
    src: url("${FONT_ROOT}/inter_ui/regular.otf") format("opentype");
  }

  @font-face {
    font-family: "Inter UI";
    font-style: normal;
    font-weight: 500;
    src: url("${FONT_ROOT}/inter_ui/medium.otf") format("opentype");
  }
  
  @font-face {
    font-family: "Inter UI";
    font-style: normal;
    font-weight: 600;
    src: url("${FONT_ROOT}/inter_ui/semibold.otf") format("opentype");
  }

  @font-face {
    font-family: "Inter UI";
    font-style: normal;
    font-weight: 700;
    src: url("${FONT_ROOT}/inter_ui/bold.otf") format("opentype");
  }
 
  @font-face {
    font-family: 'habx-icon';
    src:
      url('${FONT_ROOT}/icons/habx.woff2') format('woff2'),
      url('${FONT_ROOT}/icons/habx.woff') format('woff'),
      url('${FONT_ROOT}/icons/habx.eot') format('eot'),
      url('${FONT_ROOT}/icons/habx.eot?#iefix') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    font-display: fallback;
  }
`

export const Page = styled.div`
  display: flex;
`

export const PageContent = styled.div`
  flex: 1 1 100%;
  overflow-y: auto;
  overflow-x: hidden;
`
