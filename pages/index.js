export default function Home() {
  const services = [
    {
      title: "Airport & Hotel Transfers",
      text: "Luxury NCC transfers from airports, train stations, hotels and private villas with punctuality and comfort.",
    },
    {
      title: "Dolomites Private Tours",
      text: "Exclusive panoramic experiences through the most iconic Dolomite locations.",
    },
    {
      title: "Business & VIP Mobility",
      text: "Executive transport for events, corporate guests and premium clients.",
    },
    {
      title: "Wedding & Events",
      text: "Elegant chauffeur service for weddings and special occasions.",
    },
    {
      title: "Luxury Experiences",
      text: "Private journeys designed for comfort, privacy and style.",
    },
    {
      title: "Concierge Service",
      text: "High-end support for international clients and luxury hospitality.",
    },
  ];

  return (
    <main className="site-shell">
      
      {/* HEADER */}
      <header className="site-header">
        <div className="container nav-bar">
          
          {/* SOLO LOGO (MODIFICA QUI) */}
          <a href="#" className="brand">
            <img src="/logo.png" alt="DFP Travels" className="logo" />
          </a>

          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">Company</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            className="book-btn"
            href="https://wa.me/393000000000"
          >
            Book Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-bg hero-bg-left"></div>
        <div className="hero-bg hero-bg-right"></div>

        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Luxury private mobility in the Dolomites</div>
            <h1>Private chauffeur service with a premium experience</h1>
            <p>
              DFP Travels offers elegant transfers, exclusive tours and
              high-end mobility for clients who expect comfort, punctuality and style.
            </p>

            <div className="hero-actions">
              <a className="btn-gold" href="mailto:info@dfptravels.com">
                Request a quote
              </a>
              <a className="btn-outline" href="https://wa.me/393000000000">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="mini-label">DFP TRAVELS</div>
            <div className="mini-title">Dolomites Premium Mobility</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-label">Our Services</div>
          <h2>Luxury ground transportation</h2>

          <div className="service-grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section alt-section">
        <div className="container">
          <div className="section-label">Company</div>
          <h2>Professional, reliable, premium</h2>
          <p>
            We provide high-quality chauffeur services for international clients,
            hotels and luxury experiences in the Dolomites.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-label light">Contact</div>
          <h2>Book your transfer</h2>

          <p>Email: info@dfptravels.com</p>
          <p>Phone: +39 300 000 0000</p>

          <a
            className="btn-gold"
            href="https://wa.me/393000000000"
          >
            Contact on WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}
