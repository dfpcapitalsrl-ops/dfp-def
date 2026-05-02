import Head from "next/head";

export default function VeniceToCortinaTransfer() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Venice to Cortina Private Transfer",
    provider: {
      "@type": "TravelAgency",
      name: "DFP Travels",
      telephone: "+39 0444 1110003",
      email: "info@dfpcapital.it",
    },
    areaServed: ["Venice", "Venice Marco Polo Airport", "Cortina d'Ampezzo", "Dolomites"],
    serviceType: "Private chauffeur transfer",
    description:
      "Luxury private transfer from Venice and Venice Marco Polo Airport to Cortina d'Ampezzo with professional chauffeur and premium vehicles.",
  };

  return (
    <main className="site-shell">
      <Head>
        <title>Venice to Cortina Transfer | Private Chauffeur Service</title>
        <meta
          name="description"
          content="Book a luxury private transfer from Venice or Venice Marco Polo Airport to Cortina d'Ampezzo. Premium chauffeur service to the Dolomites for international travelers."
        />
        <meta
          name="keywords"
          content="Venice to Cortina transfer, private transfer Venice to Cortina, Venice airport to Cortina, chauffeur Venice Cortina, luxury transfer Cortina"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Venice to Cortina Private Transfer | DFP Travels" />
        <meta property="og:description" content="Luxury chauffeur transfer from Venice and Venice Airport to Cortina d'Ampezzo in the Dolomites." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <header className="site-header">
        <div className="container nav-bar">
          <a href="/" className="brand">
            <img src="/logo.png" alt="DFP Travels Venice to Cortina transfer" style={{ height: "60px" }} />
          </a>
          <nav className="nav-links">
            <a href="/venice-airport-transfer">Airport Transfer</a>
            <a href="/venice-water-taxi">Water Taxi</a>
            <a href="/dolomites-tour-from-venice">Dolomites Tour</a>
            <a href="/venice-to-cortina-transfer">Venice to Cortina</a>
          </nav>
          <a className="book-btn" href="mailto:info@dfpcapital.it?subject=Venice%20to%20Cortina%20Transfer%20Request">Book Now</a>
        </div>
      </header>

      <section className="hero-section hero-section--premium hero-section--simple">
        <div className="hero-image"></div>
        <div className="hero-overlay"></div>
        <div className="container hero-grid hero-grid--simple">
          <div className="hero-copy hero-copy--premium hero-copy--simple">
            <h1>
              Venice to Cortina Transfer
              <span>Private Chauffeur to the Dolomites</span>
            </h1>
            <p>
              Travel from Venice or Venice Marco Polo Airport to Cortina d'Ampezzo with a premium private transfer designed for international travelers, families, ski guests and luxury hospitality clients. Enjoy a comfortable chauffeur-driven journey to the heart of the Dolomites.
            </p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="mailto:info@dfpcapital.it?subject=Venice%20to%20Cortina%20Transfer%20Request">Request a quote</a>
              <a className="btn btn-whatsapp" href="https://wa.me/3904441110003?text=Hello%20DFP%20Travels,%20I%20would%20like%20to%20book%20a%20Venice%20to%20Cortina%20transfer" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
            <div className="hero-points">
              <span>Venice Airport Pickup</span>
              <span>Cortina d'Ampezzo</span>
              <span>Luxury Vehicles</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-head centered">
            <div className="section-label">Private Transfer</div>
            <h2>From Venice to Cortina with comfort, privacy and precision.</h2>
            <p>
              DFP Travels arranges premium chauffeur transfers from Venice city, Piazzale Roma, Venice Marco Polo Airport and private terminals to Cortina d'Ampezzo and nearby Dolomite resorts.
            </p>
          </div>
          <div className="service-grid">
            <article className="service-card"><div className="service-icon">✦</div><h3>Venice Airport to Cortina</h3><p>Direct private transfer from Venice Marco Polo Airport to Cortina d'Ampezzo with flight-aware coordination and premium vehicles.</p></article>
            <article className="service-card"><div className="service-icon">✦</div><h3>Venice City to Cortina</h3><p>Pickup from Venice access points, hotels, Piazzale Roma or coordinated water taxi connections for a seamless departure.</p></article>
            <article className="service-card"><div className="service-icon">✦</div><h3>Ski & Luxury Travel</h3><p>Comfortable transfers for ski holidays, luxury chalets, hotel guests, families and VIP travelers heading to the Dolomites.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container contact-grid">
          <div>
            <div className="section-label">Why Choose DFP Travels</div>
            <h2>A premium transfer experience for demanding travelers.</h2>
            <p className="muted">
              Professional chauffeurs, executive vehicles, discreet service and clear communication before your journey. Ideal for international guests who want a reliable private transfer from Venice to Cortina without stress.
            </p>
          </div>
          <div className="contact-form-card contact-card">
            <h3>Book your Venice to Cortina transfer</h3>
            <div className="contact-card-item"><span>Email</span><a href="mailto:info@dfpcapital.it?subject=Venice%20to%20Cortina%20Transfer%20Request">info@dfpcapital.it</a></div>
            <div className="contact-card-item"><span>Phone / WhatsApp</span><a href="tel:+3904441110003">+39 0444 1110003</a></div>
            <div className="contact-card-actions"><a className="btn btn-gold full-width" href="mailto:info@dfpcapital.it?subject=Venice%20to%20Cortina%20Transfer%20Request">Request a quote</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}
