"use client";


export default function Stories_sec() {
    const storiesData = [
  {
    title: "#TheOneAndOnly",
    subtitle: "With SRK",
    videoSrc: "/assets/images/case-study-video1.mp4",
    metrics: [
      { label: "Reach", value: "180 million" },
      { label: "Engagements", value: "182k" },
      { label: "Views", value: "31 million" },
    ],
  },
  {
    title: "LG MoodUP Refrigerator",
    subtitle: "Product Launch",
    videoSrc: "/assets/images/case-study-video2.mp4",
    metrics: [
      { label: "Reach", value: "184 million" },
      { label: "Impressions", value: "151k" },
      { label: "Views", value: "52+ million" },
    ],
  },
  {
    title: "India Ka Celebration",
    subtitle: "Topical Campaign",
    videoSrc: "/assets/images/case-study-video3.mp4",
    metrics: [
      { label: "Reach", value: "31 million" },
      { label: "Indian Homes", value: "4030" },
      { label: "Views", value: "121k" },
    ],
  },
  {
    title: "#LGRiddlerContest",
    subtitle: "Increasing Engagement",
    videoSrc: "/assets/images/case-study-video4.mp4",
    metrics: [
      { label: "Reach", value: "3+ million" },
      { label: "Impressions", value: "1.5 million" },
      { label: "Engagement", value: "14k" },
    ],
  },
  {
    title: "#MaaMakesItBetter",
    subtitle: "A Heartfelt Campaign",
    videoSrc: "/assets/images/case-study-video5.mp4",
    metrics: [
      { label: "Reach", value: "19.2 million" },
      { label: "Engagements", value: "6 million" },
    ],
  },
];
  return (
    <section>
      <div className="stories-sec">
        <div className="stories-heading">
          <h3 className="heading-2">
            <span>Bragggworth-y</span> <br />
            stories
          </h3>
        </div>

        <div className="stories-card-container">
          {storiesData.map((story, index) => (
            <div className="stories-cardwrap" key={index}>
              <div className="stories-card">
                <div className="stories-card-heading">
                  <h6 className="stories-card-title">{story.title}</h6>
                  <p className="stories-card-subtitle">{story.subtitle}</p>
                </div>

                <div className="stories-card-video-wrap">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    width="100%"
                    height="100%"
                  >
                    <source type="video/mp4" src={story.videoSrc} />
                  </video>
                </div>

                <ul className="stories-card-list">
                  {story.metrics.map((metric, idx) => (
                    <li className="stories-card-listitem" key={idx}>
                      <p>{metric.value}</p>
                      <span>{metric.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
