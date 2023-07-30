import CoreComponent from "@/components/core";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CoreComponent>
      <Component {...pageProps} />
    </CoreComponent>
  );
}
