import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>NextGroove</title>
        <meta name="description" content="Events NextJS" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
