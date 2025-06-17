"use client";

const awardsData = [
  {
    logo: "/assets/images/awardLogo2.png",
    tag: <>BEST <span>Cricket</span><br /><span>themed</span> content</>,
    title: "Mad Over Marketing 2025",
  },
  {
    logo: "/assets/images/awardLogo3.png",
    tag: <><span>Best digital</span><br />New Product Launch</>,
    title: "Brandwagon Ace Award 2024",
  },
  {
    logo: "/assets/images/awardLogo4.png",
    tag: <><span>Best Use Of</span><br />User Generated Content</>,
    title: "Afaqs! Digies Award 2024",
  },
  {
    logo: "/assets/images/awardLogo.png",
    tag: <>Surrogate <br /><span>Marketing Campaign</span></>,
    title: "BW Business World 2024",
  },
  {
    logo: "/assets/images/awardLogo5.png",
    tag: <>Best Use Of Social <br /><span>Media Re-launch Campaign</span></>,
    title: "DIGIXX Award 2025",
  },
  {
    logo: "/assets/images/awardLogo6.png",
    tag: <>Customer <br /><span>Relationship Marketing</span></>,
    title: "E4m 2025",
  },
  {
    logo: "/assets/images/awardLogo3.png",
    tag: <>New Product Launch &<br /><span>Re-launch Campaign</span></>,
    title: "Ace Awards 2024",
  },
];

export default function Award_sec() {
  return (
    <section className="awards-sec">
    <div className="temp7">
      <h3 className="effect-fadeUp color-white transform_none">
        Buzz <span>that</span> wins <span>stuff</span>
      </h3>

      <div className="awards-wrapper">
        <div className="awards-row transform_none">
          {awardsData.map((award, index) => (
            <div className="awards-card" key={index}>
              <img src="/assets/images/left-wing.png" alt="left wing" className="left-wing" />

              <div className="awards-logo">
                <img src={award.logo} alt="award logo" />
              </div>

              <div className="awards-content">
                <h5 className="awards-tag">{award.tag}</h5>
                <p className="awards-title">{award.title}</p>
              </div>

              <img src="/assets/images/right-wing.png" alt="right wing" className="right-wing" />
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
