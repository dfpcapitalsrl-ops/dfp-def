"use client";
import Head from "next/head";

export default function Home() {
  const services = [
    {
      title: "Venice Airport Private Transfers",
      text: "Luxury private transfers from Venice Marco Polo Airport, Venice city, Piazzale Roma, hotels and cruise terminals to the Dolomites, Verona, Lake Garda and Northern Italy.",
    },
    {
      title: "Venice Chauffeur Service",
      text: "Professional English-speaking private driver service for international travelers looking for comfort, punctuality and discretion in Venice and Veneto.",
    },
    {
      title: "Venice to Dolomites Transfers",
      text: "Premium long-distance transfers from Venice to Cortina d'Ampezzo, Alta Badia, Val Gardena, Lake Braies and the most iconic Dolomite destinations.",
    },
    {
      title: "Business & VIP Mobility",
      text: "Dedicated ground transportation for events, corporate guests, luxury hospitality partners and international clientele arriving in Venice and Northern Italy.",
    },
    {
      title: "Luxury Day Experiences",
      text: "Private day trips from Venice to Verona, Lake Garda, Prosecco hills and the Dolomites with flexible stops and a premium tailor-made service.",
    },
    {
      title: "Premium Client Assistance",
      text: "A hospitality-driven approach for clients who expect responsiveness, local knowledge and high-end service standards before and during every journey.",
    },
  ];

  const experiences = [
    {
      title: "Venice Airport Transfers",
      text: "Private luxury transfers from Venice Marco Polo Airport to hotels, villas, ski resorts and exclusive destinations across Northern Italy.",
    },
    {
      title: "Venice to Dolomites",
      text: "Comfortable chauffeur-driven journeys from Venice to Cortina, Lake Braies and the most scenic Dolomite destinations.",
    },
    {
      title: "Venice to Verona & Lake Garda",
      text: "Premium transfers and private day trips from Venice to Verona, Lake Garda and elegant lakeside locations.",
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "DFP Travels",
    legalName: "DFP CAPITAL SRL",
    description:
      "Luxury chauffeur service and private transfers from Venice Marco Polo Airport, Venice city and Northern Italy.",
    areaServed: ["Venice", "Veneto", "Dolomites", "Verona", "Lake Garda", "Northern Italy"],
    telephone: "+39 0444 1110003",
    email: "info@dfpcapital.it",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Corso Padova 83",
      addressLocality: "Vicenza",
      addressCountry: "IT",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Venice Airport Private Transfer",
          areaServed: "Venice and Northern Italy",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Venice to Dolomites Private Transfer",
          areaServed: "Venice, Cortina d'Ampezzo and the Dolomites",
        },
      },
    ],
  };

  return (
    <main className="site-shell">
      <Head>
        <title>Venice Private Transfers & Chauffeur Service | DFP Travels</title>
        <meta
          name="description"
          content="Luxury private transfers from Venice Airport and Venice city to the Dolomites, Verona, Lake Garda and Northern Italy. Premium chauffeur service for international travelers."
        />
        <meta
          name="keywords"
          content="Venice private transfer, Venice airport transfer, chauffeur service Venice, private driver Venice, Venice to Dolomites transfer, luxury transfer Venice, Venice to Cortina transfer"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Venice Private Transfers & Chauffeur Service | DFP Travels" />
        <meta
          property="og:description"
          content="Luxury chauffeur service from Venice Airport and Venice city to the Dolomites, Verona, Lake Garda and Northern Italy."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <header className="site-header">
        <div className="container nav-bar">
          <a href="#" className="brand">
            <img src="/logo.png" alt="DFP Travels private transfers from Venice" style={{ height: "60px" }} />
          </a>

          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#experiences">Experiences</a>
            <a href="#about">Company</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            className="book-btn"
            href="mailto:info@dfpcapital.it?subject=Venice%20Private%20Transfer%20Request"
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
              Venice Private Transfers
              <span>&amp; Luxury Chauffeur Service</span>
            </h1>

            <p>
              DFP Travels provides premium private transfers from Venice Airport,
              Venice city and Piazzale Roma to the Dolomites, Verona, Lake Garda
              and Northern Italy, with professional chauffeurs, executive vehicles
              and dedicated support for international travelers.
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-gold"
                href="mailto:info@dfpcapital.it?subject=Venice%20Private%20Transfer%20Request"
              >
                Request a quote
              </a>

              <a
                className="btn btn-whatsapp"
                href="https://wa.me/3904441110003?text=Hello%20DFP%20Travels,%20I%20would%20like%20to%20request%20a%20private%20transfer%20from%20Venice"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>

            <div className="hero-points">
              <span>Venice Airport Transfers</span>
              <span>Venice to Dolomites</span>
              <span>Private Driver Venice</span>
            </div>
          </div>
        </div>
      </section>

      <section id="experiences" className="section alt-section">
        <div className="container">
          <div className="section-head centered">
            <div className="section-label">Experiences</div>
            <h2>Private transfers from Venice to Italy's most exclusive destinations.</h2>
            <p>
              From airport arrivals to long-distance luxury transfers, DFP Travels
              connects Venice with the Dolomites, Verona, Lake Garda and premium
              destinations across Northern Italy.
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
            <h2>Executive vehicles for Venice private transfers and luxury travel.</h2>
            <p>
              A premium fleet designed for airport transfers, private drivers, VIP
              service and bespoke chauffeur journeys from Venice across Northern Italy.
            </p>
          </div>

          <div className="fleet-grid">
            {fleet.map((vehicle) => (
              <article className="fleet-card" key={vehicle.name}>
                <div className="fleet-image-wrap">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} private transfer vehicle Venice`}
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
            <h2>Luxury transfers from Venice, tailored for international travelers.</h2>
            <p>
              Private airport transfers, chauffeur service, long-distance routes and
              premium mobility for guests, families, business travelers and hospitality partners.
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
              <h2>Private water taxi connections for seamless Venice arrivals.</h2>
              <p>
                Extend the DFP Travels experience with refined private water taxi
                solutions for Venice arrivals, hotel connections, special occasions
                and tailor-made journeys in iconic Italian destinations.
              </p>
              <p>
                Designed for guests who expect privacy, punctuality and a seamless
                premium standard from airport arrival to final destination.
              </p>
              <div className="water-taxi-actions">
                <a
                  className="btn btn-gold"
                  href="mailto:info@dfpcapital.it?subject=Venice%20Water%20Taxi%20Request"
                >
                  Request water taxi
                </a>
              </div>
            </div>

            <div className="water-taxi-visual">
              <img
                src="/water-taxi.jpg"
                alt="Private water taxi service in Venice"
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
              <h2>A trusted partner for Venice transfers, private tours and VIP mobility.</h2>
              <p className="muted">
                DFP Travels delivers a private travel experience shaped by punctuality, discretion and personalized service, with a strong focus on comfort, elegance and reliability for international clients arriving in Venice and Northern Italy.
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
                  Venice airport transfers, luxury tours and executive mobility with
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
              Request your private transfer from Venice.
            </h2>
            <p className="contact-copy">
              Contact DFP Travels to arrange your Venice airport transfer, private driver, bespoke tour or VIP chauffeur service. Our team assists international travelers with personalized solutions from Venice to Northern Italy.
            </p>

            <div className="contact-meta">
              <div>
                <strong>Email:</strong> info@dfpcapital.it
              </div>
              <div>
                <strong>Phone:</strong> +39 0444 1110003
              </div>
              <div>
                <strong>WhatsApp:</strong> +39 0444 1110003
              </div>
            </div>
          </div>

          <div className="contact-form-card contact-card">
            <h3>Plan your Venice transfer</h3>

            <div className="contact-card-item">
              <span>Email</span>
              <a href="mailto:info@dfpcapital.it?subject=Venice%20Private%20Transfer%20Request">
                info@dfpcapital.it
              </a>
            </div>

            <div className="contact-card-item">
              <span>Phone</span>
              <a href="tel:+3904441110003">+39 0444 1110003</a>
            </div>

            <div className="contact-card-actions">
              <a
                className="btn btn-gold full-width"
                href="mailto:info@dfpcapital.it?subject=Venice%20Private%20Transfer%20Request"
              >
                Request a quote
              </a>

              <a
                className="btn btn-whatsapp full-width"
                href="https://wa.me/3904441110003?text=Hello%20DFP%20Travels,%20I%20would%20like%20to%20request%20a%20private%20transfer%20from%20Venice"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <a
        className="floating-whatsapp"
        href="https://wa.me/3904441110003?text=Hello%20DFP%20Travels,%20I%20would%20like%20to%20request%20a%20private%20transfer%20from%20Venice"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp about a Venice private transfer"
      >
        <span className="floating-whatsapp-icon" aria-hidden="true">WhatsApp</span>
      </a>

     <footer className="site-footer">
  <div className="container">
    <p>
      DFP TRAVELS - Agenzia Viaggi Online di proprietà DFP CAPITAL SRL - Sede Legale: Corso Padova 83, Vicenza
    </p>
    <p>
      SCIA Regione Veneto: Pratica n° 04596800245-10112025-0853 - PEC: dfpcapital@pec.it - P.IVA: 04596800245
    </p>
    <p className="footer-links">
      <a href="/privacy">Privacy Policy</a> |{" "}
      <a href="/cookie">Cookie Policy</a>
    </p>
  </div>
</footer>
          <div className="cookie-banner">
  <p>
    This website uses cookies to ensure the best experience.{" "}
    <a href="/cookie">Learn more</a>
  </p>
  <button onClick={() => document.querySelector(".cookie-banner").style.display = "none"}>
    Accept
  </button>
</div>
    </main>
  );
}
