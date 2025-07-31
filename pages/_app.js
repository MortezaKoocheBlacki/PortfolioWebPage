import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
