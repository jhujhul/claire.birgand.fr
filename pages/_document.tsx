import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head />
        <body>
          <Main />
          <div id="headlessui-portal-root">
            <div></div>
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
