import "@fontsource/inter/500.css";
import "@fontsource/puritan/700.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/ubuntu/700.css";
import "@fontsource/raleway/700.css";
import "@fontsource/montserrat/700.css";

import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
