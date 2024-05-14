import Container from "@/component/Container/Container";
import Footer from "@/component/Shared/Footer";
import Header from "@/component/Shared/Header";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="pt-16">
        <Container>{children}</Container>
      </div>
      <Footer />
    </>
  );
};

export default layout;
