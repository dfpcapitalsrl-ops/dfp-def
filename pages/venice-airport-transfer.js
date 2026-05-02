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

  const routes = [
    {
      title: "Venice Airport to Venice",
      text: "Private arrival service to Piazzale Roma, hotels, residences and coordinated water taxi connections.",
    },
    {
      title: "Venice Airport to Cortina",
      text: "Comfortable long-distance transfer to Cortina d'Ampezzo and premium Dolomite resorts.",
    },
    {
      title: "Venice Airport to Lake Garda",
      text: "Elegant chauffeur service toward Verona, Lake Garda, villas and luxury hospitality destinations.",
    },
  ];

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
        <div className="hero-image"></div><div className="hero-overlay"></div><div className="hero-bg hero-bg-left"></div><div className="hero-bg hero-bg-right"></div>
        <div className="container hero-grid hero-grid--simple">
          <div className="hero-copy hero-copy--premium hero-copy--simple">
            <div className="section-label">Venice Marco Polo Airport</div>
            <h1>Venice Airport Transfer <span>Private Chauffeur Service</span></h1>
            <p>Begin your journey with a premium private transfer from Venice Marco Polo Airport. DFP Travels welcomes international guests with punctual pickup, executive vehicles and refined chauffeur service toward Venice, Cortina, the Dolomites, Verona and Lake Garda.</p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="mailto:info@dfpcapital.it?subject=Venice%20Airport%20Transfer%20Request">Request a quote</a>
              <a className="btn btn-whatsapp" href="https://wa.me/3904441110003?text=Hello%20DFP%20Travels,%20I%20would%20like%20to%20book%20a%20Venice%20airport%20transfer" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
            <div className="hero-points"><span>Flight-aware pickup</span><span>Executive fleet</span><span>English-speaking support</span></div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container water-taxi-grid">
          <div className="water-taxi-copy">
            <div className="section-label">Arrival Experience</div>
            <h2>A smoother way to arrive in Venice.</h2>
            <p>After a long flight, every detail matters. Your transfer is arranged around your arrival time, luggage needs and final destination, with a discreet service designed for premium travelers.</p>
            <p>Choose a direct road transfer, a coordinated water taxi connection or a long-distance chauffeur service toward Northern Italy’s most exclusive destinations.</p>
            <div className="water-taxi-actions"><a className="btn btn-gold" href="mailto:info@dfpcapital.it?subject=Venice%20Airport%20Transfer%20Request">Plan your arrival</a></div>
          </div>
          <div className="water-taxi-visual">
            <img src="/fleet-2.jpg" alt="Luxury private transfer vehicle at Venice Airport" className="water-taxi-image" />
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-head centered">
            <div className="section-label">Popular Routes</div>
            <h2>Private airport transfers tailored to your destination.</h2>
            <p>From Venice Airport to city hotels, alpine resorts and luxury stays across Northern Italy.</p>
          </div>
          <div className="experience-grid">
            {routes.map((route, index) => (
              <article className="experience-card" key={route.title}>
                <div className={`experience-visual visual-${index + 1}`}>
                  <img src={index === 1 ? "/dolomiti.jpg" : index === 2 ? "/verona.jpg" : "/water-taxi.jpg"} alt={route.title} className="experience-photo" />
                </div>
                <div className="experience-body">
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-head centered">
            <div className="section-label">Why DFP Travels</div>
            <h2>Designed for international clients who expect more.</h2>
            <p>Clear communication, premium vehicles, professional chauffeurs and tailored assistance before and during your journey.</p>
          </div>
          <div className="service-grid">
            <article className="service-card"><div className="service-icon">✦</div><h3>Premium welcome</h3><p>Arrival coordination, clear communication and a smooth start to your stay in Italy.</p></article>
            <article className="service-card"><div className="service-icon">✦</div><h3>Comfortable vehicles</h3><p>Executive fleet options selected for comfort, privacy, luggage space and elegant presentation.</p></article>
            <article className="service-card"><div className="service-icon">✦</div><h3>Beyond Venice</h3><p>Transfers to Cortina, the Dolomites, Verona, Lake Garda and selected luxury destinations.</p></article>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div>
            <div className="section-label light">Book Your Transfer</div>
            <h2 className="contact-title">Arrive in Venice with confidence.</h2>
            <p className="contact-copy">Send your flight details, destination and number of passengers. DFP Travels will arrange a tailored private transfer solution for your arrival.</p>
            <div className="contact-meta"><div><strong>Email:</strong> info@dfpcapital.it</div><div><strong>Phone / WhatsApp:</strong> +39 0444 1110003</div></div>
          </div>
          <div className="contact-form-card contact-card">
            <h3>Request airport transfer</h3>
            <div className="contact-card-item"><span>Email</span><a href="mailto:info@dfpcapital.it?subject=Venice%20Airport%20Transfer%20Request">info@dfpcapital.it</a></div>
            <div className="contact-card-item"><span>Phone / WhatsApp</span><a href="tel:+3904441110003">+39 0444 1110003</a></div>
            <div className="contact-card-actions"><a className="btn btn-gold full-width" href="mailto:info@dfpcapital.it?subject=Venice%20Airport%20Transfer%20Request">Request a quote</a><a className="btn btn-whatsapp full-width" href="https://wa.me/3904441110003?text=Hello%20DFP%20Travels,%20I%20would%20like%20to%20book%20a%20Venice%20airport%20transfer" target="_blank" rel="noopener noreferrer">WhatsApp</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}
