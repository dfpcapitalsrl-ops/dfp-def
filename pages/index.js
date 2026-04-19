export default function Home() {
  const services = [
    {
      title: "Airport & Hotel Transfers",
      text: "Luxury NCC transfers from airports, train stations, hotels, chalets and private villas with punctuality, discretion and executive comfort.",
    },
    {
      title: "Dolomites Private Tours",
      text: "Tailor-made panoramic experiences through the most iconic Dolomite destinations, with flexible stops and a premium private service.",
    },
    {
      title: "Business & VIP Mobility",
      text: "Dedicated ground transportation for events, corporate guests, luxury hospitality partners and international clientele.",
    },
    {
      title: "Wedding & Special Events",
      text: "Elegant chauffeur service for ceremonies, private events and curated guest mobility with refined presentation and reliability.",
    },
    {
      title: "Luxury Day Experiences",
      text: "From scenic drives to exclusive mountain itineraries, every journey is designed to feel seamless, private and memorable.",
    },
    {
      title: "Premium Client Assistance",
      text: "A hospitality-driven approach for clients who expect responsiveness, local knowledge and high-end service standards.",
    },
  ];

  const experiences = [
    {
      title: "Verona & Lake Garda",
      text: "Timeless elegance and lakeside beauty between Verona and Lake Garda.",
    },
    {
      title: "Dolomites & Braies",
      text: "Unforgettable journeys through the heart of the Dolomites.",
    },
    {
      title: "Prosecco Tour",
      text: "Sip, savor, and discover the sparkling soul of Prosecco country.",
    },
  ];

  const experienceImages = ["/verona.jpg", "/dolomiti.jpg", "/prosecco.jpg"];

  const fleet = [
    {
      name: "Mercedes Vito",
      image: "/fleet-1.jpg",
    },
    {
      name: "Mercedes V-Class",
      image: "/fleet-2.jpg",
    },
    {
      name: "Mercedes E-Class",
      image: "/fleet-3.jpg",
    },
    {
      name: "Mercedes E-Class SW",
      image: "/fleet-4.jpg",
    },
    {
      name: "Mercedes C-Class SW",
      image: "/fleet-5.jpg",
    },
  ];

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="container nav-bar">
          <a href="#" className="brand">
            <img src="/logo.png" alt="DFP Travels" style={{ height: "60px" }} />
          </a>

          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#experiences">Experiences</a>
            <a href="#about">Company</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            className="book-btn"
            href="mailto:info@dfptravels.com?subject=Quote%20Request"
          >
            Book Now
          </a>
        </div>
      </header>

      <section className="hero-section hero-section--premium hero-section--simple">
        <div className="hero-image"></div>
        <div className="hero-overlay"></div>
        <div className="hero-bg hero-bg-left"></div>
        <div className="hero-bg hero-bg-right"></div>

        <div className="container hero-grid hero-grid--simple">
          <div className="hero-copy hero-copy--premium hero-copy--simple">
            <h1>
              Luxury Transfers
              <span>&amp; Exclusive Tours</span>
            </h1>

            <p>
              DFP Travels redefines private travel with luxury chauffeur services
              and bespoke experiences across Northern Italy, delivering elegance,
              comfort and impeccable attention to detail in every journey.
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-gold"
                href="mailto:info@dfptravels.com?subject=Quote%20Request"
              >
                Request a quote
              </a>

              <a
                className="btn btn-whatsapp"
                href="https://wa.me/3904441110003?text=Hello%20DFP%20Travels,%20I%20would%20like%20to%20request%20a%20private%20transfer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="whatsapp-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M20.52 3.48A11.82 11.82 0 0012.02 0C5.39 0 .02 5.37.02 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.61A11.96 11.96 0 0012.02 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.5-8.52zM12.02 21.8c-1.86 0-3.67-.5-5.26-1.44l-.38-.22-3.67.96.98-3.58-.25-.37a9.77 9.77 0 01-1.5-5.15c0-5.4 4.39-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87a9.73 9.73 0 012.87 6.93c0 5.4-4.39 9.8-9.8 9.8zm5.39-7.36c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.66.15-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.58-.48-.5-.66-.51h-.56c-.19 0-.51.07-.78.36-.27.29-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.21 3.04.15.19 2.08 3.17 5.04 4.44.7.3 1.25.48 1.68.61.71.23 1.35.2 1.86.12.57-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34z" />
                  </svg>
                </span>
                WhatsApp
              </a>
            </div>

            <div className="hero-points">
              <span>Airport Transfers</span>
              <span>Private Tours</span>
              <span>VIP Mobility</span>
            </div>
          </div>
        </div>
      </section>

      <section id="experiences" className="section alt-section">
        <div className="container">
          <div className="section-head centered">
            <div className="section-label">Experiences</div>
            <h2>Travel in Style. Discover in Comfort.</h2>
            <p>
              Journeys should be curated, never merely booked. DFP Travels
              delivers bespoke travel experiences across Northern Italy,
              combining local expertise with refined service.
            </p>
          </div>

          <div className="experience-grid">
            {experiences.map((experience, index) => (
              <article className="experience-card" key={experience.title}>
                <div className={`experience-visual visual-${index + 1}`}>
                  <img
                    src={experienceImages[index]}
                    alt={experience.title}
                    className="experience-photo"
                  />
                </div>
                <div className="experience-body">
                  <h3>{experience.title}</h3>
                  <p>{experience.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fleet" className="section section-white">
        <div className="container">
          <div className="section-head centered">
            <div className="section-label">Our Fleet</div>
            <h2>Vehicles selected for comfort, elegance and reliability.</h2>
            <p>
              A premium fleet designed for airport transfers, private tours, VIP
              service and bespoke travel experiences across Northern Italy.
            </p>
          </div>

          <div className="fleet-grid">
            {fleet.map((vehicle) => (
              <article className="fleet-card" key={vehicle.name}>
                <div className="fleet-image-wrap">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="fleet-image"
                  />
                </div>
                <div className="fleet-body">
                  <h3>{vehicle.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section alt-section">
        <div className="container">
          <div className="section-head centered">
            <div className="section-label">Our Services</div>
            <h2>Luxury Ground Transportation perfectly Tailored.</h2>
            <p>
              A stronger structure for premium clients, hospitality partners and
              international travelers looking for reliability and refinement.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">✦</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="water-taxi" className="section section-white">
        <div className="container">
          <div className="section-head centered">
            <div className="section-label">Water Taxi</div>
          </div>

          <div className="water-taxi-grid">
            <div className="water-taxi-copy">
              <h2>Exclusive water transfers with the same comfort and elegance.</h2>
              <p>
                Extend the DFP Travels experience beyond the road with refined
                private water taxi services, ideal for luxury arrivals, hotel
                connections, special occasions and tailor-made journeys in iconic
                lake destinations.
              </p>
              <p>
                Designed for guests who expect privacy, punctuality and a seamless
                premium standard from start to finish.
              </p>
              <div className="water-taxi-actions">
                <a
                  className="btn btn-gold"
                  href="mailto:info@dfptravels.com?subject=Water%20Taxi%20Request"
                >
                  Request water taxi
                </a>
              </div>
            </div>

            <div className="water-taxi-visual">
              <img
                src="/water-taxi.jpg"
                alt="Luxury Water Taxi"
                className="water-taxi-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section alt-section">
        <div className="container">
          <div className="section-head centered company-head">
            <div className="section-label">Company</div>
          </div>

          <div className="about-grid">
            <div>
              <h2>Luxury branding, stronger hierarchy, more corporate confidence.</h2>
              <p className="muted">
                This version pushes a more refined balance between elegance and
                readability: more whitespace, stronger typography, cleaner
                sections and clearer conversion paths.
              </p>
            </div>

            <div className="about-panel">
              <div className="about-stat">
                <strong>24/7</strong>
                <span>Availability</span>
              </div>
              <div className="about-stat">
                <strong>VIP</strong>
                <span>Premium Service</span>
              </div>
              <div className="about-stat wide">
                <strong>Tailor-Made</strong>
                <span>
                  Airport transfers, luxury tours and executive mobility with
                  personalized support.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <div className="section-label light">Contact</div>
            <h2 className="contact-title">
              Ready to turn this into your final premium website?
            </h2>
            <p className="contact-copy">
              Replace the placeholder details with your real WhatsApp number,
              business email, final logo and real photography to publish a
              stronger luxury brand presence.
            </p>

            <div className="contact-meta">
              <div>
                <strong>Email:</strong> info@dfptravels.com
              </div>
              <div>
                <strong>Phone:</strong> +39 000 000 0000
              </div>
              <div>
                <strong>WhatsApp:</strong> +39 0444 1110003
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="field-placeholder">Name</div>
            <div className="field-placeholder">Email</div>
            <div className="field-placeholder large">
              Transfer, tour request, hotel partnership, VIP service...
            </div>
            <a
              className="btn btn-gold full-width"
              href="mailto:info@dfptravels.com?subject=Quote%20Request"
            >
              Send request
            </a>
          </div>
        </div>
      </section>

      <a
        className="floating-whatsapp"
        href="https://wa.me/3904441110003?text=Hello%20DFP%20Travels,%20I%20would%20like%20to%20request%20a%20private%20transfer"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="floating-whatsapp-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M20.52 3.48A11.82 11.82 0 0012.02 0C5.39 0 .02 5.37.02 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.61A11.96 11.96 0 0012.02 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.5-8.52zM12.02 21.8c-1.86 0-3.67-.5-5.26-1.44l-.38-.22-3.67.96.98-3.58-.25-.37a9.77 9.77 0 01-1.5-5.15c0-5.4 4.39-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87a9.73 9.73 0 012.87 6.93c0 5.4-4.39 9.8-9.8 9.8zm5.39-7.36c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.66.15-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.58-.48-.5-.66-.51h-.56c-.19 0-.51.07-.78.36-.27.29-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.21 3.04.15.19 2.08 3.17 5.04 4.44.7.3 1.25.48 1.68.61.71.23 1.35.2 1.86.12.57-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34z" />
          </svg>
        </span>
      </a>
    </main>
  );
}
