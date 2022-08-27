import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
        color : {
            primary: string,
            secondary: string,
            grey: string,
            backGround: string,
            black: string,
            alert: string,
        }
    }
}