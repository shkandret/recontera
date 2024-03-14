"use client";

import { data } from "@/app/constants";

import Burger from "@/components/Burger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubmitYourApp from "@/components/SubmitYourApp";

import ContentLayout from "@/components/ContentLayout";

import About from "../sections/About";
import WhyHow from "../sections/WhyHow";

interface AdvantageProps {
  params: { num: string };
}

const Advantage: React.FC<AdvantageProps> = ({ params }) => {
  let num = 1;
  if (
    parseInt(params.num) <= data.advantage.cardAdvantages.length &&
    parseInt(params.num) > 0
  ) {
    num = parseInt(params.num);
  }
  return (
    <>
      <Burger
        data={data.global.burger}
        phone={data.global.phone}
        email={data.global.email}
      />
      <Header data={data.global.header} phone={data.global.phone} />
      <ContentLayout>
        <About data={data.advantage} index={num} />
        <WhyHow data={data.advantage.cardAdvantages[num - 1]} />
        <SubmitYourApp data={data.global.submitYourApp} />
        <Footer
          data={data.global.footer}
          phone={data.global.phone}
          email={data.global.email}
        />
      </ContentLayout>
    </>
  );
};

export default Advantage;
