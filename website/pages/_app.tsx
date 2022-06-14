import NextApp, { AppContext, AppProps } from "next/app";
import Head from "next/head";

import "@styles/globals.css";

import Layout from "@components/Layout";
import { getBranchesMenu, getMainMenu, getMobileMenu } from "@common/api/getMenu";

function App({ Component, pageProps, siteProps }: AppProps & { siteProps: any }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, viewport-fit=cover, initial-scale=1, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Layout siteProps={siteProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);

  const siteProps = {
    subtitle: "Sportverein Odin von 1905 Hannover e.V",
    mainMenu: getMainMenu(),
    mobileMenu: getMobileMenu(),
    branchesMenu: getBranchesMenu(),
  };

  return { ...appProps, siteProps };
};

export default App;
