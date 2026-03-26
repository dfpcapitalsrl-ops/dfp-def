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
      title: "Iconic Mountain Passes",
      text: "Refined private itineraries through the most scenic roads in the Dolomites.",
    },
    {
      title: "Lakes & Panoramic Stops",
      text: "Curated journeys for guests who want beauty, comfort and time to enjoy every view.",
    },
    {
      title: "Tailor-Made Itineraries",
      text: "Flexible experiences for couples, families, VIP travelers and international guests.",
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
              <a className="btn btn-outline" href="https://wa.me/390000000000">
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

      <section id="water-taxi" className="section alt-section">
        <div className="container water-taxi-grid">
          <div className="water-taxi-copy">
            <div className="section-label">Water Taxi</div>
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
      </section>

      <section id="services" className="section section-white">
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

      <section id="about" className="section section-white">
        <div className="container about-grid">
          <div>
            <div className="section-label">Company</div>
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
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <div className="section-label light">Contact</div>
            <h2>Ready to turn this into your final premium website?</h2>
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
                <strong>WhatsApp:</strong> +39 000 000 0000
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
    </main>
  );
}
