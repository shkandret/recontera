"use client";

import { data } from "../constants";

import Burger from "@/components/Burger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import SubmitYourApp from "@/components/SubmitYourApp";

import About from "./sections/About";
import Concept from "./sections/Concept";
import Marketing from "./sections/Marketing";
import Principle from "./sections/Principle";

import ContentLayout from "@/components/ContentLayout";

const Comparison = () => {
  return (
    <>
      <Burger
        data={data.global.burger}
        phone={data.global.phone}
        email={data.global.email}
      />
      <Header data={data.global.header} phone={data.global.phone} />
      <ContentLayout>
        <About data={data.buyingup.about} />
        <Concept data={data.buyingup.concept} />
        <Marketing data={data.buyingup.marketing} />
        <Principle data={data.buyingup.principle} />
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

export default Comparison;
