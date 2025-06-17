"use client";
import Image from "next/image";

const services = [
  {
    icon: "/assets/images/servic-card-icn1.png",
    title: "Social Media Marketing",
    subtitle: "Through digital platforms and campaigns, engage audiences and promote your product or service.",
    hashtags: ["Social Media Marketing", "Social Content", "Influencer Marketing"],
  },
  {
    icon: "/assets/images/servic-card-icn2.png",
    title: "Performance Marketing",
    subtitle: "These online marketing  campaigns that contribute to drive results like clicks and support unique business models.",
    hashtags: ["Google Advertising", "Media Advertising", "Social Media Advertising"],
  },
  {
    icon: "/assets/images/servic-card-icn3.png",
    title: "Branding & Communication",
    subtitle: "Brand communication happens whenever a customer interacts with the brand.",
    hashtags: [
      "Brand Strategy",
      "Logo design",
      "Brand Identity design",
      "Packaging design",
      "Marketing collaterals design",
      "Corporate Branding",
    ],
  },
  {
    icon: "/assets/images/servic-card-icn4.png",
    title: "Digital Strategy",
    subtitle: "These online marketing  campaigns that contribute to drive results like clicks and support unique business models.",
    hashtags: [
      "Google Advertising",
      "Media Advertising",
      "Social Media Advertising",
      "AD platforms",
      "PPC Management",
      "Campaigns objectives",
    ],
  },
  {
    icon: "/assets/images/servic-card-icn5.png",
    title: "Listening",
    subtitle: "Engage your audience with content like videos, articles, guides, and infographics.",
    hashtags: ["Insightful Reporting", "Social Media Monitoring", "Response Management"],
  },
  {
    icon: "/assets/images/servic-card-icn6.png",
    title: "Video Production",
    subtitle: "It’s the process of creating video content for TV, home video, or the internet similar to filmmaking.",
    hashtags: [
      "Corporate Video Production",
      "Motion Graphics",
      "Video Marketing Production",
      "Social Video Production",
      "Campaigns objectives",
    ],
  },
  {
    icon: "/assets/images/servic-card-icn7.png",
    title: "ORM",
    subtitle: "Our online reputation management shapes and protects reputations to prevent or handle crises.",
    hashtags: [
      "Brand Reputation Management",
      "Research & analysis",
      "ORM stategy",
      "Negetive Review Management",
      "Marketing collaterals design",
    ],
  },
  {
    icon: "/assets/images/servic-card-icn8.png",
    title: "Corporate Presentations",
    subtitle: "It is a unique way of communicating and building the brand image for your company",
    hashtags: ["Powerpain(corporate/personal)", "HTML5(CMS/static)"]
  },
  {
    icon: "/assets/images/servic-card-icn9.png",
    title: "Content Development",
    subtitle: "It’s the process of researching, writing, and editing content for publication.",
    hashtags: ["Social Media Content", "Copywriting $ Translation", "Compaign Idea Generation"]
  },
  {
    icon: "/assets/images/servic-card-icn10.png",
    title: "Website Content",
    subtitle: "It is the textual, visual, or aural content that may include text, images, sounds, videos, and animations.",
    hashtags: [
      "Branded Content",
      "Guest Blogging",
      "Article writing Services",
      "English Copywriting services",
      "Multilingual Copywriting services"
    ]
  },
  {
    icon: "/assets/images/servic-card-icn11.png",
    title: "Web Analytics",
    subtitle: "It involves analyzing web data to understand and improve site performance.",
    hashtags: [
      "Web Analytics",
      "A/B Multivariate Testing",
      "Web Analytics audit",
      "Enhanced E-Commerce Analytics",
      "Website Analysis & Reporting",
      "Social Media Analytics"
    ]
  },
  {
    icon: "/assets/images/servic-card-icn12.png",
    title: "Search Engine Optimization",
    subtitle: "SEO improves the quality and quantity of traffic to your website/web page from search engines.",
    hashtags: [
      "SEO Services",
      "GEO-Targeted SEO",
      "SEO Tracking & Analysis",
      "Google Tag Manager",
      "Heat Mapping",
      "A/B Multivariate Testing"
    ]
  },
  {
    icon: "/assets/images/servic-card-icn13.png",
    title: "Ecomm Marketplace",
    subtitle: "A platform showcasing products from multiple brands and vendors in one place.",
    hashtags: [
      "E-Commerce Management",
      "Product Listing & cataloging",
      "Amazone Advirtising Services"
    ]
  },
  {
    icon: "/assets/images/servic-card-icn14.png",
    title: "Account Management",
    subtitle: "Our account management offers service, support, and growth opportunities.",
    hashtags: [
      "E-commerce Account Management",
      "Amazone Account Management Services"
    ]
  },
  {
    icon: "/assets/images/servic-card-icn15.png",
    title: "Custom Content Assets",
    subtitle: "Engage your audience with content like videos, articles, guides, and infographics..",
    hashtags: [
      "Video Tutorials",
      "Infographics",
      "Poll and Surveys",
      "E-book",
      "Podcasts",
      "Slideshows",
      "Newsletters",
      "Webinars",
      "Q&As",
      "Case Studies",
      "White Papers",
      "Reviews",
      "Apps",
      "Curated Content"
    ]
  }


];

export default function ServicesCardList() {
  return (
    <div className="services-card-container">
      {services.map((service, index) => (
        <div key={index} className="services-card">
          <div className="services-card-icn">
            <Image src={service.icon} alt="icon" width={64} height={64} />
          </div>
          <div className="services-card-content-wrapper">
            <div className="services-card-content">
              <h5 className="services-card-title">{service.title}</h5>
              <p className="services-card-subtitle">{service.subtitle}</p>
            </div>
            <div className="hashtags-wrap">
              <div className="hashtags-parent">
                {service.hashtags.map((tag, idx) => (
                  <span key={idx} className="services-card-hashtag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="services-card-link">
            <a href="javascript:void(0)">
              Get Demo <img src={'assets/images/svg/arrow-right.svg'} alt="arrow" width={16} height={16} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
