import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  siteTitle = "Share Me | Documentation";
  description = "Share images and videos on your own private server.";

  render() {
    return (
      <Html>
        <Head>
          <title>{this.siteTitle}</title>
          <meta property="og:title" content={this.siteTitle} />
          <meta name="description" content={this.description} />
          {/* <meta property="og:url" content={url} /> */}
          <meta property="og:type" content="summary" />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:title" content={this.siteTitle} />
          <meta property="twitter:description" content={this.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/share-me/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
