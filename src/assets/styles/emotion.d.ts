import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: string;
      secondary: string;
      grey: string;
      backGround: string;
      hoverBackGround: string;
      black: string;
      alert: string;
    };
    font: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      bold: string;
      p: string;
    };
  }
}
