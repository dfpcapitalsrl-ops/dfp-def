export default function Home() {
  const services = [
    {
      title: "Airport & Hotel Transfers",
      text: "Luxury NCC transfers from airports, hotels and stations with punctuality and comfort.",
    },
    {
      title: "Dolomites Private Tours",
      text: "Exclusive panoramic tours in the Dolomites with tailor-made itineraries.",
    },
    {
      title: "Business & VIP Mobility",
      text: "Executive transport for events, hotels and premium clients.",
    },
    {
      title: "Wedding & Special Events",
      text: "Elegant chauffeur service for ceremonies and private events.",
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
          
          {/* SOLO LOGO */}
          <a href="#" className="brand">
            <img src="/logo.png" alt="DFP Travels" className="logo" />
          </a>

          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#experiences">Experiences</a>
            <a href="#about">Company</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="book-btn" href="https://wa.me/393000000000">
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
            <h1>Private chauffeur service with premium experience</h1>
            <p>
              DFP Travels offers elegant transfers, exclusive tours and high-end mobility
              for clients who expect comfort, punctuality and style.
            </p>

            <div className="hero-actions">
              <a className="btn-gold" href="mailto:info@dfptravels.com">
                Request a quote
              </a>
              <a className="btn-outline" href="https://wa.me/393000000000">
                WhatsApp
              </a>
            </div>

            <div className="hero-highlights">
              <span>Airport transfers</span>
              <span>Luxury tours</span>
              <span>VIP service</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="mini-label">DFP TRAVELS</div>
            <div className="mini-title">Dolomites Premium Mobility</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section section-white">
        <div className="container">
          <div className="section-label">Our Services</div>
          <h2>Luxury ground transportation</h2>

          <div className="service-grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-icon">✦</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section id="experiences" className="section alt-section">
        <div className="container">
          <div className="section-label">Experiences</div>
          <h2>Discover the Dolomites</h2>

          <div className="experience-grid">
            <div className="experience-card">
              <div className="experience-inner"></div>
              <h3>Mountain Passes</h3>
            </div>

            <div className="experience-card">
              <div className="experience-inner"></div>
              <h3>Lakes & Views</h3>
            </div>

            <div className="experience-card">
              <div className="experience-inner"></div>
              <h3>Tailor-made Tours</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section section-white">
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

          <a className="btn-gold" href="https://wa.me/393000000000">
            Contact on WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}
