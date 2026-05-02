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
    description:
      "Private water taxi service in Venice for airport arrivals, hotel transfers, cruise terminal connections and luxury travel experiences.",
  };

  return (
    <main className="site-shell">
      <Head>
        <title>Venice Water Taxi Service | Airport & Hotel Transfers | DFP Travels</title>
        <meta
          name="description"
          content="Private Venice water taxi service for airport arrivals, hotel transfers, cruise terminal connections and luxury travel experiences. Book premium water transfers in Venice."
        />
        <meta
          name="keywords"
          content="Venice water taxi, private water taxi Venice, Venice airport water taxi, Venice hotel transfer, luxury water taxi Venice, Venice cruise terminal transfer"
        />
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

      <section className="hero-section hero-section--premium hero-section--simple">
        <div className="hero-image"></div><div className="hero-overlay"></div>
        <div className="container hero-grid hero-grid--simple">
          <div className="hero-copy hero-copy--premium hero-copy--simple">
            <h1>Venice Water Taxi Service <span>Private Airport & Hotel Transfers</span></h1>
            <p>Arrive in Venice with a private water taxi experience designed for international travelers, luxury guests and hospitality partners. DFP Travels arranges premium water transfers from Venice Airport, Piazzale Roma, cruise terminals and hotels across the lagoon.</p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="mailto:info@dfpcapital.it?subject=Venice%20Water%20Taxi%20Request">Request a quote</a>
              <a className="btn btn-whatsapp" href="https://wa.me/3904441110003?text=Hello%20DFP%20Travels,%20I%20would%20like%20to%20book%20a%20Venice%20water%20taxi" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
            <div className="hero-points"><span>Airport Arrivals</span><span>Hotel Transfers</span><span>Cruise Connections</span></div>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-head centered">
            <div className="section-label">Private Water Transfers</div>
            <h2>Seamless Venice connections by water.</h2>
            <p>Whether you are arriving at Venice Marco Polo Airport, reaching a luxury hotel, connecting from a private chauffeur transfer or organizing a special arrival, DFP Travels coordinates a refined and comfortable water taxi solution.</p>
          </div>
          <div className="service-grid">
            <article className="service-card"><div className="service-icon">✦</div><h3>Venice Airport Water Taxi</h3><p>Private water taxi connections from Venice Airport toward central Venice hotels and lagoon destinations, ideal for premium arrivals.</p></article>
            <article className="service-card"><div className="service-icon">✦</div><h3>Hotel & Private Residence Transfers</h3><p>Elegant water transfers for hotel check-ins, private residences, events and special occasions across Venice.</p></article>
            <article className="service-card"><div className="service-icon">✦</div><h3>Cruise Terminal & Event Transfers</h3><p>Tailor-made water taxi arrangements for cruise guests, luxury events, weddings and VIP mobility in Venice.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container contact-grid">
          <div>
            <div className="section-label">Premium Venice Arrival</div>
            <h2>Combine chauffeur and water taxi service.</h2>
            <p className="muted">For travelers reaching Venice from the airport, the Dolomites, Verona or Lake Garda, DFP Travels can coordinate road transfers and private water taxi connections for a seamless door-to-door experience.</p>
          </div>
          <div className="contact-form-card contact-card">
            <h3>Book your Venice water taxi</h3>
            <div className="contact-card-item"><span>Email</span><a href="mailto:info@dfpcapital.it?subject=Venice%20Water%20Taxi%20Request">info@dfpcapital.it</a></div>
            <div className="contact-card-item"><span>Phone / WhatsApp</span><a href="tel:+3904441110003">+39 0444 1110003</a></div>
            <div className="contact-card-actions"><a className="btn btn-gold full-width" href="mailto:info@dfpcapital.it?subject=Venice%20Water%20Taxi%20Request">Request a quote</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}
