"use client";

import { data } from "../constants";

import Burger from "@/components/Burger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubmitYourApp from "@/components/SubmitYourApp";

import About from "./sections/About";
import ReportFirst from "./sections/ReportFirst";
import ReportSecond from "./sections/ReportSecond";
import ReportThird from "./sections/ReportThird";
import Graphs from "./sections/Graphs";

import ContentLayout from "@/components/ContentLayout";

const Results = () => {
  return (
    <>
      <Burger
        data={data.global.burger}
        phone={data.global.phone}
        email={data.global.email}
      />
      <Header data={data.global.header} phone={data.global.phone} />
      <ContentLayout>
        <About data={data.results.about} />
        <ReportFirst data={data.results.reportFirst} />
        <ReportSecond data={data.results.reportSecond} />
        <ReportThird data={data.results.reportThird} />
        <Graphs data={data.results.graphs} />
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

export default Results;
