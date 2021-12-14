import "../styles/globals.scss";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <NextNProgress
        height={5}
        color="#03d3b9"
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
