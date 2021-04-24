import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";

const Portfolio = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Portfolio</title>
        </Head>
        <Container>
          <h1>Portfolio</h1>
        </Container>
      </Layout>
    </>
  );
};

export default Portfolio;
