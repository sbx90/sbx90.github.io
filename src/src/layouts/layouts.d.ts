import { ChakraProps, ThemingProps } from "@chakra-ui/react";

declare namespace ILayout {
  export interface IProps {
    children: React.ReactNode;
    header?: React.ReactNode;
    stickyHeader?: boolean;
    darkHeader?: boolean;
    footer?: React.ReactNode;
    aside?: React.ReactNode;
    hideFooter?: boolean;
    contentContainerProps?: ChakraProps & ThemingProps;
  }
}

export { ILayout };
