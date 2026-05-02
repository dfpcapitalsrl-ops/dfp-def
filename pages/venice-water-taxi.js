import Head from "next/head";

export default function VeniceWaterTaxi() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Venice Water Taxi Service",
    provider: {
      "@type": "TravelAgency",
      name: "DFP Travels",
      telephone: "+39 0444 1110003",
      email: "info@dfpcapital.it",
    },
    areaServed: ["Venice", "Venice Airport", "Venice hotels", "Venice cruise terminal", "Lagoon of Venice"],
    serviceType: "Private water taxi transfer",
    description: "Private water taxi service in Venice for airport arrivals, hotel transfers, cruise terminal connections and luxury travel experiences.",
  };

  return (
    <main className="site-shell">
      <Head>
        <title>Venice Water Taxi Service | Airport & Hotel Transfers | DFP Travels</title>
        <meta name="description" content="Private Venice water taxi service for airport arrivals, hotel transfers, cruise terminal connections and luxury travel experiences. Book premium water transfers in Venice." />
        <meta name="keywords" content="Venice water taxi, private water taxi Venice, Venice airport water taxi, Venice hotel transfer, luxury water taxi Venice, Venice cruise terminal transfer" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Venice Water Taxi Service | DFP Travels" />
        <meta property="og:description" content="Private water taxi transfers in Venice for airport arrivals, hotels, cruise terminals and luxury travel experiences." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <header className="site-header">
        <div className="container nav-bar">
          <a href="/" className="brand"><img src="/logo.png" alt="DFP Travels Venice Water Taxi" style={{ height: "60px" }} /></a>
          <nav className="nav-links">
            <a href="/venice-airport-transfer">Airport Transfer</a>
            <a href="/venice-water-taxi">Water Taxi</a>
            <a href="/dolomites-tour-from-venice">Dolomites Tour</a>
            <a href="/#contact">Contact</a>
          </nav>
          <a className="book-btn" href="mailto:info@dfpcapital.it?subject=Venice%20Water%20Taxi%20Request">Book Now</a>
        </div>
      </header>

      <section className="section section-white">
        <div className="container">
          <div className="section-head centered">
            <div className="section-label">Water Taxi</div>
          </div>

          <div className="water-taxi-grid">
            <div className="water-taxi-copy">
              <h1>Venice Water Taxi Service</h1>
              <h2>Exclusive water transfers with the same comfort and elegance.</h2>
              <p>
                Extend the DFP Travels experience beyond the road with refined
                private water taxi services, ideal for Venice airport arrivals,
                hotel connections, cruise terminal transfers, special occasions and
                tailor-made journeys across the lagoon.
              </p>
              <p>
                Designed for guests who expect privacy, punctuality and a seamless
                premium standard from start to finish.
              </p>
              <div className="water-taxi-actions">
                <a className="btn btn-gold" href="mailto:info@dfpcapital.it?subject=Venice%20Water%20Taxi%20Request">Request water taxi</a>
                <a className="btn btn-whatsapp" href="https://wa.me/3904441110003?text=Hello%20DFP%20Travels,%20I%20would%20like%20to%20book%20a%20Venice%20water%20taxi" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>
            </div>

            <div className="water-taxi-visual">
              <img src="/water-taxi.jpg" alt="Private water taxi service in Venice" className="water-taxi-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-head centered">
            <div className="section-label">Private Water Transfers</div>
            <h2>Seamless Venice connections by water.</h2>
            <p>Whether you are arriving at Venice Marco Polo Airport, reaching a luxury hotel or connecting from a private chauffeur transfer, DFP Travels coordinates a refined water taxi solution.</p>
          </div>
          <div className="service-grid">
            <article className="service-card"><div className="service-icon">✦</div><h3>Airport Arrivals</h3><p>Private water taxi connections from Venice Airport toward central Venice hotels and lagoon destinations.</p></article>
            <article className="service-card"><div className="service-icon">✦</div><h3>Hotel Transfers</h3><p>Elegant water transfers for hotel check-ins, private residences, events and special occasions across Venice.</p></article>
            <article className="service-card"><div className="service-icon">✦</div><h3>Cruise & VIP Mobility</h3><p>Tailor-made water taxi arrangements for cruise guests, luxury events, weddings and premium travel needs.</p></article>
          </div>
        </div>
      </section>
    </main>
  );
}
