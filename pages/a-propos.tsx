import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";

const Apropos = () => {
  return (
    <Layout>
      <Head>
        <title>A propos</title>
      </Head>
      <Container>
        <h1>Je suis Claire et je vous éclaire</h1>
      </Container>
    </Layout>
  );
};

export default Apropos;
