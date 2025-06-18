"use client";
// import { useEffect } from "react";
import Award_sec from "@/components/Award_sect";
// import Buzz_brands from "@/components/Buzz_brands";
// import Header from "@/components/common/Header";
import ContactUs from "@/components/contactUsForm";
import Em_buzz_sec from "@/components/Em-buzz-sec";
import Footer from "@/components/Footer";
import Home_banner from "@/components/Home_banner";
import Musings_wrap from "@/components/Musings_wrap";
import Our_scroll_stoping from "@/components/Our_scroll_stopping";
import About_video from "@/components/Temp3-about_video";
import sampleData from "@/data/sampleData";
import Heading_section from "@/components/Heading";
import Stories_sec from "@/components/stories-sec";
import PageLayout from "@/components/common/pageLayout";

export default function Home() {

  return (
    <>
      <PageLayout backgroundClass="" showVideoBackground={true} >
        <Home_banner data={sampleData.Home_banner} />
        <About_video />
        <Heading_section />
        <Em_buzz_sec />
        <Stories_sec />
        <Award_sec />
        <Musings_wrap />
        <Our_scroll_stoping />
        <section><ContactUs /></section>
        <section><Footer /></section>
      </PageLayout>
    </>
  );
}
