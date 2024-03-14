"use client";

import { data } from "../constants";

import Burger from "@/components/Burger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubmitYourApp from "@/components/SubmitYourApp";

import About from "./sections/About";

import ContentLayout from "@/components/ContentLayout";

const Example = () => {
  return (
    <>
      <Burger
        data={data.global.burger}
        phone={data.global.phone}
        email={data.global.email}
      />
      <Header data={data.global.header} phone={data.global.phone} />
      <ContentLayout>
        <About data={data.examples} />
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

export default Example;
