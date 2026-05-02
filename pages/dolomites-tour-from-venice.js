import Head from "next/head";

export default function DolomitesTour() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Dolomites Tour from Venice",
    description:
      "Private day tour from Venice to the Dolomites including Cortina d'Ampezzo, Lake Braies and scenic alpine routes.",
    touristType: "Luxury travelers",
  };

  return (
    <main className="site-shell">
      <Head>
        <title>Dolomites Tour from Venice | Private Luxury Day Trip</title>
        <meta
          name="description"
          content="Private Dolomites tour from Venice with chauffeur. Visit Cortina d'Ampezzo, Lake Braies and the most scenic mountain routes in one day."
        />
        <meta
          name="keywords"
          content="Dolomites tour from Venice, Venice to Dolomites day trip, Cortina tour from Venice, Lake Braies tour Venice, private Dolomites tour"
        />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <section className="hero-section hero-section--premium hero-section--simple">
        <div className="hero-image"></div><div className="hero-overlay"></div>
        <div className="container">
          <h1>Dolomites Tour from Venice</h1>
          <p>Discover the Dolomites with a private chauffeur-driven experience from Venice. A full-day luxury journey through one of Italy’s most iconic mountain landscapes.</p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-head centered">
            <h2>Highlights of your Dolomites experience</h2>
            <p>A curated itinerary combining nature, comfort and exclusive travel.</p>
          </div>
          <div className="service-grid">
            <article className="service-card"><h3>Cortina d'Ampezzo</h3><p>Elegant alpine destination and gateway to the Dolomites, perfect for scenic stops and relaxation.</p></article>
            <article className="service-card"><h3>Lake Braies</h3><p>One of the most photographed lakes in Italy, with crystal-clear waters and breathtaking mountain views.</p></article>
            <article className="service-card"><h3>Scenic Routes</h3><p>Panoramic drives through the Dolomites with stops tailored to your preferences.</p></article>
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
