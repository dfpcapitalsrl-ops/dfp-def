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
      <section className="hero">
        <div className="container hero-content">
          <h1>Luxury Chauffeur Service in the Dolomites</h1>
          <p>
            Private transfers, exclusive tours and premium mobility with style,
            comfort and reliability.
          </p>

          <div className="hero-buttons">
            <a
              className="btn-gold"
              href="mailto:info@dfptravels.com"
            >
              Request a Quote
            </a>

            <a
              className="btn-outline"
              href="https://wa.me/393000000000"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <h2>Our Services</h2>

          <div className="services">
            {services.map((s) => (
              <div className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact</h2>

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
