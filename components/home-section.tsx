import { FunctionComponent } from "react";

import Container from "./container";

interface Props {
  backgroundColor: string;
}
const HomeSection: FunctionComponent<Props> = (props) => {
  const { backgroundColor, children } = props;

  return (
    <section className={`${backgroundColor} pt-4 md:pt-7 pb-4`}>
      <Container>{children}</Container>
    </section>
  );
};

export default HomeSection;
