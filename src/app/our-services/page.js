"use client";
import PageLayout from "@/components/common/pageLayout";
import ContactUs from "@/components/contactUsForm";
import Footer from "@/components/Footer";
import OurService_banner from "@/components/our-service-banner";
import ServicesCardList from "@/components/servicesCard";

export default function OurService() {

    return (
        <>
            <PageLayout backgroundClass="about-us-bg" showVideoBackground={false} >
                <OurService_banner />
                <div className="main-container white_background">
                    <ServicesCardList />
                </div>
                <ContactUs Title={<><span>we’re always just a </span>  <br /> click away!</>} />
                <Footer />
            </PageLayout>
        </>
    );
}
