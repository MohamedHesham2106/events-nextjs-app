import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import { NotificationContextProvider } from "../context/notification-context";
function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>NextGroove</title>
          <meta name="description" content="Events NextJS" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
