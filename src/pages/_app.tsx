import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import { Provider } from "@/component/Context";
import { Provider } from "react-redux";
import { store } from "@/component/store/Store";
export default function App({ Component, pageProps }: AppProps) {
  return(
<>
{/* <Provider> for context api*/}
<Provider store={store}>
<Component {...pageProps} />
</Provider>
{/* </Provider> for context api*/}
</>
  );
}
