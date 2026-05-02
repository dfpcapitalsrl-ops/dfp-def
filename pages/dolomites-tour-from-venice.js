import Head from "next/head";

export default function DolomitesTour() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Dolomites Tour from Venice",
    description: "Private day tour from Venice to the Dolomites including Cortina d'Ampezzo, Lake Braies and scenic alpine routes.",
    touristType: "Luxury travelers",
  };

  const experiences = [
    {
      title: "Cortina d'Ampezzo",
      text: "Elegant alpine destination and gateway to the Dolomites, perfect for scenic stops and relaxation.",
      image: "/dolomiti.jpg",
    },
    {
      title: "Lake Braies",
      text: "One of the most photographed lakes in Italy, with crystal-clear waters and breathtaking mountain views.",
      image: "/dolomiti.jpg",
    },
    {
      title: "Scenic Routes",
      text: "Panoramic drives through the Dolomites with stops tailored to your preferences.",
      image: "/dolomiti.jpg",
    },
  ];

  return (
    <main className="site-shell">
      <Head>
        <title>Dolomites Tour from Venice | Private Luxury Day Trip</title>
        <meta name="description" content="Private Dolomites tour from Venice with chauffeur. Visit Cortina d'Ampezzo, Lake Braies and the most scenic mountain routes in one day." />
        <meta name="keywords" content="Dolomites tour from Venice, Venice to Dolomites day trip, Cortina tour from Venice, Lake Braies tour Venice, private Dolomites tour" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <section id="experiences" className="section alt-section">
        <div className="container">
          <div className="section-head centered">
            <div className="section-label">Dolomites Experience</div>
            <h1>Dolomites Tour from Venice</h1>
            <p>Discover the Dolomites with a private chauffeur-driven experience. A full-day luxury journey through one of Italy’s most iconic mountain landscapes.</p>
          </div>

          <div className="experience-grid">
            {experiences.map((exp, index) => (
              <article className="experience-card" key={exp.title}>
                <div className={`experience-visual visual-${index + 1}`}>
                  <img src={exp.image} alt={exp.title} className="experience-photo" />
                </div>
                <div className="experience-body">
                  <h3>{exp.title}</h3>
                  <p>{exp.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container contact-grid">
          <div>
            <h2>Private, flexible and premium.</h2>
            <p className="muted">Travel at your own pace with a professional chauffeur, luxury vehicle and personalized itinerary designed for international travelers.</p>
          </div>
          <div className="contact-form-card contact-card">
            <h3>Book your Dolomites tour</h3>
            <div className="contact-card-item"><span>Email</span><a href="mailto:info@dfpcapital.it?subject=Dolomites%20Tour%20Request">info@dfpcapital.it</a></div>
            <div className="contact-card-item"><span>Phone / WhatsApp</span><a href="tel:+3904441110003">+39 0444 1110003</a></div>
            <div className="contact-card-actions"><a className="btn btn-gold full-width" href="mailto:info@dfpcapital.it?subject=Dolomites%20Tour%20Request">Request a quote</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}
