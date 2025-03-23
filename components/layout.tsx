import { Analytics } from "@vercel/analytics/next";
import Footer from "./footer";
import Header from "./header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main>
          {children}
          <Analytics />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
