// import FullSectionScroller from "@/components/AnimatedSections";
"use client";
import AboutUs_banner from "@/components/aboutus-banner";
import ContactUs from "@/components/contactUsForm";
import Footer from "@/components/Footer";
import Latest_blog from "@/components/latest_blogs";
import Leadership from "@/components/Ledership";
import Musings_wrap from "@/components/Musings_wrap";
import OurStrategic from "@/components/Our_strategic";
import Voices_sec from "@/components/voices-sec";
import Growth_sec from "@/components/growth-sec";
import PageLayout from "@/components/common/pageLayout";

export default function About_us() {
    return (
        <>
            <PageLayout backgroundClass="" showVideoBackground={true} >
                <section ><AboutUs_banner /></section>
                {/* <section><OurStrategic /> </section> */}
                <Growth_sec />
                <section><Leadership /> </section>
                {/* <section><Latest_blog /></section> */}
                {/* <Musings_wrap /> */}
                <Voices_sec />
                <section><div className="temp12 "><ContactUs /></div></section>
                <section><Footer /></section>
            </PageLayout>
        </>
    );
}
