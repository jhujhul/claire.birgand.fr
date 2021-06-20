import { FunctionComponent } from "react";
import Head from "next/head";
import Image from "next/image";

import Layout from "../components/layout";
import { getLegalNoticeHtml } from "../lib/api";
import HomeSection from "../components/home-section";
import HomeSectionTitle from "../components/home-section-title";

interface Props {
  legalNoticeHtml: string;
}
const Index: FunctionComponent<Props> = (props) => {
  const { legalNoticeHtml } = props;

  return (
    <Layout>
      <Head>
        <title>Accueil : Claire Birgand : Mentions légales</title>
        <meta
          name="description"
          content={`Accueil : Claire Birgand : Mentions légales`}
        />
      </Head>
      <HomeSection backgroundColor="bg-white">
        <HomeSectionTitle
          titleName="Mentions légales"
          titleColor="text-black"
          icon={
            <Image
              src="/assets/asterisque-anis.png"
              alt="Asterisque"
              width={27}
              height={26}
            />
          }
        />
        <div
          className="prose mb-8"
          dangerouslySetInnerHTML={{ __html: legalNoticeHtml }}
        />
      </HomeSection>
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const legalNoticeHtml = await getLegalNoticeHtml();

  return {
    props: { legalNoticeHtml },
  };
};
