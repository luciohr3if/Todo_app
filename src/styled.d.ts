import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    text: string;
    card: string;
    button: string;
    buttonText: string;
    inputBackground: string;
    iconColor: string;
  }
}
