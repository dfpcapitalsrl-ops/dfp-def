import Head from "next/head";

export default function VeniceAirportTransfer() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Venice Airport Private Transfer",
    provider: {
      "@type": "TravelAgency",
      name: "DFP Travels",
      telephone: "+39 0444 1110003",
      email: "info@dfpcapital.it",
    },
    areaServed: ["Venice Marco Polo Airport", "Venice", "Veneto", "Dolomites", "Verona", "Lake Garda"],
    serviceType: "Private airport transfer and chauffeur service",
    description: "Luxury private transfers from Venice Marco Polo Airport to Venice city, Piazzale Roma, hotels, villas, the Dolomites, Verona, Lake Garda and Northern Italy.",
  };

  return (
    <main className="site-shell">
      <Head>
        <title>Venice Airport Transfer | Private Chauffeur Service | DFP Travels</title>
        <meta name="description" content="Book a luxury private transfer from Venice Marco Polo Airport to Venice city, Piazzale Roma, the Dolomites, Verona, Lake Garda and Northern Italy." />
        <meta name="keywords" content="Venice airport transfer, Venice Marco Polo airport transfer, private transfer Venice airport, Venice chauffeur service, private driver Venice airport" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Venice Airport Transfer | DFP Travels" />
        <meta property="og:description" content="Luxury private transfers from Venice Marco Polo Airport with professional chauffeurs and executive vehicles." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <header className="site-header">
        <div className="container nav-bar">
          <a href="/" className="brand"><img src="/logo.png" alt="DFP Travels Venice Airport Transfer" style={{ height: "60px" }} /></a>
          <nav className="nav-links">
            <a href="/venice-airport-transfer">Airport Transfer</a>
            <a href="/venice-water-taxi">Water Taxi</a>
            <a href="/venice-to-cortina-transfer">Venice to Cortina</a>
            <a href="/dolomites-tour-from-venice">Dolomites Tour</a>
            <a href="/#contact">Contact</a>
          </nav>
          <a className="book-btn" href="mailto:info@dfpcapital.it?subject=Venice%20Airport%20Transfer%20Request">Book Now</a>
        </div>
      </header>

      <section className="hero-section hero-section--premium hero-section--simple">
        <div className="hero-image"></div><div className="hero-overlay"></div>
        <div className="container hero-grid hero-grid--simple">
          <div className="hero-copy hero-copy--premium hero-copy--simple">
            <h1>Venice Airport Transfer <span>Private Chauffeur Service</span></h1>
            <p>Premium private transfers from Venice Marco Polo Airport for international travelers who want a punctual, discreet and comfortable arrival experience. Travel from the airport to Venice, Piazzale Roma, hotels, villas, the Dolomites, Verona, Lake Garda and Northern Italy with DFP Travels.</p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="mailto:info@dfpcapital.it?subject=Venice%20Airport%20Transfer%20Request">Request a quote</a>
              <a className="btn btn-whatsapp" href="https://wa.me/3904441110003?text=Hello%20DFP%20Travels,%20I%20would%20like%20to%20book%20a%20Venice%20airport%20transfer" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
            <div className="hero-points"><span>Venice Marco Polo Airport</span><span>Private Driver</span><span>Luxury Vehicles</span></div>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-head centered">
            <div className="section-label">Airport Transfer</div>
            <h2>Seamless arrivals from Venice Airport.</h2>
            <p>Our chauffeur monitors your arrival, assists with a smooth pickup and provides a refined private transfer experience for families, business travelers, VIP guests and luxury hospitality clients.</p>
          </div>
          <div className="service-grid">
            <article className="service-card"><div className="service-icon">✦</div><h3>Airport to Venice</h3><p>Private transfer from Venice Marco Polo Airport to Venice city access points, Piazzale Roma, hotels and private residences.</p></article>
            <article className="service-card"><div className="service-icon">✦</div><h3>Airport to Dolomites</h3><p>Comfortable long-distance transfers to Cortina d'Ampezzo, Alta Badia, Val Gardena, Lake Braies and mountain resorts.</p></article>
            <article className="service-card"><div className="service-icon">✦</div><h3>Airport to Verona & Lake Garda</h3><p>Luxury transfers from Venice Airport to Verona, Lake Garda, villas, hotels and exclusive destinations in Northern Italy.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container contact-grid">
          <div>
            <div className="section-label">Why DFP Travels</div>
            <h2>Designed for international clients.</h2>
            <p className="muted">Clear communication, premium vehicles, professional chauffeurs and tailored assistance before and during your journey.</p>
          </div>
          <div className="contact-form-card contact-card">
            <h3>Book your Venice airport transfer</h3>
            <div className="contact-card-item"><span>Email</span><a href="mailto:info@dfpcapital.it?subject=Venice%20Airport%20Transfer%20Request">info@dfpcapital.it</a></div>
            <div className="contact-card-item"><span>Phone / WhatsApp</span><a href="tel:+3904441110003">+39 0444 1110003</a></div>
            <div className="contact-card-actions"><a className="btn btn-gold full-width" href="mailto:info@dfpcapital.it?subject=Venice%20Airport%20Transfer%20Request">Request a quote</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}
