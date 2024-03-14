"use client";

import React, { useState, useEffect, useRef } from "react";

import Burger from "@/components/Burger";
import Header from "@/components/Header";
import About from "@/sections/About";
import SymbiosisTech from "@/sections/SymbiosisTech";
import HowItWork from "@/sections/HowItWork";
import RelevantToCompany from "@/sections/RelevantToCompany";
import Peculiarities from "@/sections/Peculiarities";
import Benefits from "@/sections/Benefits";
import Advantages from "@/sections/Advantages";
import Implementation from "@/sections/Implementation";
import ComparisonCRM from "@/sections/ComparisonCRM";
import SystemSCM from "@/sections/SystemSCM";
import SubmitYourApp from "@/components/SubmitYourApp";
import Footer from "@/components/Footer";

import { data } from "./constants";

// scroll logic;
import ContentLayout from "@/components/ContentLayout";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setLoaded(true);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  });
  return (
    <>
      {!loaded ? (
        <div></div>
      ) : (
        <>
          <Burger
            data={data.global.burger}
            phone={data.global.phone}
            email={data.global.email}
          />
          <Header data={data.global.header} phone={data.global.phone} />
          <ContentLayout>
            <About data={data.index.about} />
            <SymbiosisTech data={data.index.symbiosisTech} />
            <HowItWork data={data.index.howItWork} />
            <RelevantToCompany data={data.index.relevantToCompany} />
            <Peculiarities data={data.index.peculiarities} />
            <Advantages data={data.index.advantages} />
            <Implementation data={data.index.implementation} />
            <ComparisonCRM data={data.index.comparisonCRM} />
            <Benefits data={data.index.benefits} />
            <SystemSCM data={data.index.systemSCM} />
            <SubmitYourApp data={data.global.submitYourApp} />
            <Footer
              data={data.global.footer}
              phone={data.global.phone}
              email={data.global.email}
            />
          </ContentLayout>
        </>
      )}
    </>
  );
}