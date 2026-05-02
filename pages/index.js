"use client";
import Head from "next/head";

export default function Home() {
  const services = [
    {
      title: "Venice Airport Private Transfers",
      text: "Luxury private transfers from Venice Marco Polo Airport, Venice city, Piazzale Roma, hotels and cruise terminals to the Dolomites, Verona, Lake Garda and Northern Italy.",
      href: "/venice-airport-transfer",
    },
    {
      title: "Venice Water Taxi",
      text: "Private water taxi connections for Venice airport arrivals, hotels, cruise terminals and seamless luxury travel across the lagoon.",
      href: "/venice-water-taxi",
    },
    {
      title: "Venice to Cortina Transfers",
      text: "Premium private transfers from Venice and Venice Airport to Cortina d'Ampezzo, ski resorts and the heart of the Dolomites.",
      href: "/venice-to-cortina-transfer",
    },
    {
      title: "Dolomites Tour from Venice",
      text: "Private luxury day trips from Venice to Cortina, Lake Braies and the most iconic Dolomite destinations with a professional chauffeur.",
      href: "/dolomites-tour-from-venice",
    },
    {
      title: "Business & VIP Mobility",
      text: "Dedicated ground transportation for events, corporate guests, luxury hospitality partners and international clientele arriving in Venice and Northern Italy.",
      href: "#contact",
    },
    {
      title: "Premium Client Assistance",
      text: "A hospitality-driven approach for clients who expect responsiveness, local knowledge and high-end service standards before and during every journey.",
      href: "#contact",
    },
  ];

  const experiences = [
    {
      title: "Verona & Lake Garda",
      text: "Timeless elegance and lakeside beauty between Verona and Lake Garda.",
      href: "#contact",
    },
    {
      title: "Dolomites & Braies",
      text: "Unforgettable journeys through the heart of the Dolomites.",
      href: "/dolomites-tour-from-venice",
    },
    {
      title: "Prosecco Tour",
      text: "Sip, savor, and discover the sparkling soul of Prosecco country.",
      href: "#contact",
    },
  ];

  const experienceImages = ["/verona.jpg", "/dolomiti.jpg", "/prosecco.jpg"];

  const fleet = [
    { name: "Mercedes Vito", image: "/fleet-1.jpg" },
    { name: "Mercedes V-Class", image: "/fleet-2.jpg" },
    { name: "Mercedes E-Class", image: "/fleet-3.jpg" },
    { name: "Mercedes E-Class SW", image: "/fleet-4.jpg" },
    { name: "Mercedes C-Class SW", image: "/fleet-5.jpg" },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "DFP Travels",
    legalName: "DFP CAPITAL SRL",
    description: "Luxury chauffeur service and private transfers from Venice Marco Polo Airport, Venice city and Northern Italy.",
    areaServed: ["Venice", "Veneto", "Dolomites", "Verona", "Lake Garda", "Northern Italy"],
    telephone: "+39 0444 1110003",
    email: "info@dfpcapital.it",
    address: { "@type": "PostalAddress", streetAddress: "Corso Padova 83", addressLocality: "Vicenza", addressCountry: "IT" },
  };

  return (
    <main className="site-shell">
      <Head>
        <title>Venice Private Transfers & Chauffeur Service | DFP Travels</title>
        <meta name="description" content="Luxury private transfers from Venice Airport and Venice city to the Dolomites, Verona, Lake Garda and Northern Italy. Premium chauffeur service for international travelers." />
        <meta name="keywords" content="Venice private transfer, Venice airport transfer, chauffeur service Venice, private driver Venice, Venice to Dolomites transfer, luxury transfer Venice, Venice to Cortina transfer" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Venice Private Transfers & Chauffeur Service | DFP Travels" />
        <meta property="og:description" content="Luxury chauffeur service from Venice Airport and Venice city to the Dolomites, Verona, Lake Garda and Northern Italy." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <header className="site-header">
        <div className="container nav-bar">
          <a href="/" className="brand"><img src="/logo.png" alt="DFP Travels private transfers from Venice" style={{ height: "60px" }} /></a>
          <nav className="nav-links">
            <a href="/venice-airport-transfer">Airport Transfer</a>
            <a href="/venice-water-taxi">Water Taxi</a>
            <a href="/venice-to-cortina-transfer">Venice to Cortina</a>
            <a href="/dolomites-tour-from-venice">Dolomites Tour</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="book-btn" href="mailto:info@dfpcapital.it?subject=Venice%20Private%20Transfer%20Request">Book Now</a>
        </div>
      </header>

      <section className="hero-section hero-section--premium hero-section--simple">
        <div className="hero-image"></div><div className="hero-overlay"></div><div className="hero-bg hero-bg-left"></div><div className="hero-bg hero-bg-right"></div>
        <div className="container hero-grid hero-grid--simple">
          <div className="hero-copy hero-copy--premium hero-copy--simple">
            <h1>Venice Private Transfers<span>&amp; Luxury Chauffeur Service</span></h1>
            <p>DFP Travels provides premium private transfers from Venice Airport, Venice city and Piazzale Roma to the Dolomites, Verona, Lake Garda and Northern Italy, with professional chauffeurs, executive vehicles and dedicated support for international travelers.</p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="mailto:info@dfpcapital.it?subject=Venice%20Private%20Transfer%20Request">Request a quote</a>
              <a className="btn btn-whatsapp" href="https://wa.me/3904441110003?text=Hello%20DFP%20Travels,%20I%20would%20like%20to%20request%20a%20private%20transfer%20from%20Venice" target="_blank" rel="noopener noreferrer"><span className="whatsapp-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.52 3.48A11.82 11.82 0 0012.02 0C5.39 0 .02 5.37.02 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.61A11.96 11.96 0 0012.02 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.5-8.52zM12.02 21.8c-1.86 0-3.67-.5-5.26-1.44l-.38-.22-3.67.96.98-3.58-.25-.37a9.77 9.77 0 01-1.5-5.15c0-5.4 4.39-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87a9.73 9.73 0 012.87 6.93c0 5.4-4.39 9.8-9.8 9.8zm5.39-7.36c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.66.15-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.58-.48-.5-.66-.51h-.56c-.19 0-.51.07-.78.36-.27.29-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.21 3.04.15.19 2.08 3.17 5.04 4.44.7.3 1.25.48 1.68.61.71.23 1.35.2 1.86.12.57-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34z" /></svg></span>WhatsApp</a>
            </div>
            <div className="hero-points"><span>Airport Transfers</span><span>Private Tours</span><span>VIP Mobility</span></div>
          </div>
        </div>
      </section>

      <section id="experiences" className="section alt-section">
        <div className="container">
          <div className="section-head centered">
            <div className="section-label">Experiences</div>
            <h2>Travel in Style. Discover in Comfort.</h2>
            <p>Journeys should be curated, never merely booked. DFP Travels delivers bespoke travel experiences across Northern Italy, combining local expertise with refined service.</p>
          </div>
          <div className="experience-grid">
            {experiences.map((experience, index) => (
              <article className="experience-card" key={experience.title}>
                <div className={`experience-visual visual-${index + 1}`}>
                  <img src={experienceImages[index]} alt={experience.title} className="experience-photo" />
                </div>
                <div className="experience-body">
                  <h3>{experience.title}</h3>
                  <p>{experience.text}</p>
                  <a href={experience.href} aria-label={`Learn more about ${experience.title}`}>Learn more</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fleet" className="section section-white">
        <div className="container"><div className="section-head centered"><div className="section-label">Our Fleet</div><h2>Executive vehicles for Venice private transfers and luxury travel.</h2><p>A premium fleet designed for airport transfers, private drivers, VIP service and bespoke chauffeur journeys from Venice across Northern Italy.</p></div><div className="fleet-grid">{fleet.map((vehicle) => (<article className="fleet-card" key={vehicle.name}><div className="fleet-image-wrap"><img src={vehicle.image} alt={`${vehicle.name} private transfer vehicle Venice`} className="fleet-image" /></div><div className="fleet-body"><h3>{vehicle.name}</h3></div></article>))}</div></div>
      </section>

      <section id="services" className="section alt-section">
        <div className="container"><div className="section-head centered"><div className="section-label">Our Services</div><h2>Luxury transfers from Venice, tailored for international travelers.</h2><p>Private airport transfers, chauffeur service, long-distance routes and premium mobility for guests, families, business travelers and hospitality partners.</p></div><div className="service-grid">{services.map((service) => (<article className="service-card" key={service.title}><div className="service-icon">✦</div><h3>{service.title}</h3><p>{service.text}</p><a href={service.href}>Learn more</a></article>))}</div></div>
      </section>

      <section id="water-taxi" className="section section-white">
        <div className="container"><div className="section-head centered"><div className="section-label">Water Taxi</div></div><div className="water-taxi-grid"><div className="water-taxi-copy"><h2>Private water taxi connections for seamless Venice arrivals.</h2><p>Extend the DFP Travels experience with refined private water taxi solutions for Venice arrivals, hotel connections, special occasions and tailor-made journeys in iconic Italian destinations.</p><p>Designed for guests who expect privacy, punctuality and a seamless premium standard from airport arrival to final destination.</p><div className="water-taxi-actions"><a className="btn btn-gold" href="/venice-water-taxi">Discover Venice Water Taxi</a></div></div><div className="water-taxi-visual"><img src="/water-taxi.jpg" alt="Private water taxi service in Venice" className="water-taxi-image" /></div></div></div>
      </section>

      <section id="about" className="section alt-section"><div className="container"><div className="section-head centered company-head"><div className="section-label">Company</div></div><div className="about-grid"><div><h2>A trusted partner for Venice transfers, private tours and VIP mobility.</h2><p className="muted">DFP Travels delivers a private travel experience shaped by punctuality, discretion and personalized service, with a strong focus on comfort, elegance and reliability for international clients arriving in Venice and Northern Italy.</p></div><div className="about-panel"><div className="about-stat"><strong>24/7</strong><span>Availability</span></div><div className="about-stat"><strong>VIP</strong><span>Premium Service</span></div><div className="about-stat wide"><strong>Tailor-Made</strong><span>Venice airport transfers, luxury tours and executive mobility with personalized support.</span></div></div></div></div></section>

      <section id="contact" className="section contact-section"><div className="container contact-grid"><div><div className="section-label light">Contact</div><h2 className="contact-title">Request your private transfer from Venice.</h2><p className="contact-copy">Contact DFP Travels to arrange your Venice airport transfer, private driver, bespoke tour or VIP chauffeur service. Our team assists international travelers with personalized solutions from Venice to Northern Italy.</p><div className="contact-meta"><div><strong>Email:</strong> info@dfpcapital.it</div><div><strong>Phone:</strong> +39 0444 1110003</div><div><strong>WhatsApp:</strong> +39 0444 1110003</div></div></div><div className="contact-form-card contact-card"><h3>Plan your Venice transfer</h3><div className="contact-card-item"><span>Email</span><a href="mailto:info@dfpcapital.it?subject=Venice%20Private%20Transfer%20Request">info@dfpcapital.it</a></div><div className="contact-card-item"><span>Phone</span><a href="tel:+3904441110003">+39 0444 1110003</a></div><div className="contact-card-actions"><a className="btn btn-gold full-width" href="mailto:info@dfpcapital.it?subject=Venice%20Private%20Transfer%20Request">Request a quote</a><a className="btn btn-whatsapp full-width" href="https://wa.me/3904441110003?text=Hello%20DFP%20Travels,%20I%20would%20like%20to%20request%20a%20private%20transfer%20from%20Venice" target="_blank" rel="noopener noreferrer"><span className="whatsapp-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.52 3.48A11.82 11.82 0 0012.02 0C5.39 0 .02 5.37.02 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.61A11.96 11.96 0 0012.02 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.5-8.52zM12.02 21.8c-1.86 0-3.67-.5-5.26-1.44l-.38-.22-3.67.96.98-3.58-.25-.37a9.77 9.77 0 01-1.5-5.15c0-5.4 4.39-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87a9.73 9.73 0 012.87 6.93c0 5.4-4.39 9.8-9.8 9.8zm5.39-7.36c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.66.15-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.58-.48-.5-.66-.51h-.56c-.19 0-.51.07-.78.36-.27.29-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.21 3.04.15.19 2.08 3.17 5.04 4.44.7.3 1.25.48 1.68.61.71.23 1.35.2 1.86.12.57-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34z" /></svg></span>WhatsApp</a></div></div></div></section>

      <a className="floating-whatsapp" href="https://wa.me/3904441110003?text=Hello%20DFP%20Travels,%20I%20would%20like%20to%20request%20a%20private%20transfer%20from%20Venice" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp about a Venice private transfer"><span className="floating-whatsapp-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M20.52 3.48A11.82 11.82 0 0012.02 0C5.39 0 .02 5.37.02 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.61A11.96 11.96 0 0012.02 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.5-8.52zM12.02 21.8c-1.86 0-3.67-.5-5.26-1.44l-.38-.22-3.67.96.98-3.58-.25-.37a9.77 9.77 0 01-1.5-5.15c0-5.4 4.39-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87a9.73 9.73 0 012.87 6.93c0 5.4-4.39 9.8-9.8 9.8zm5.39-7.36c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.66.15-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.58-.48-.5-.66-.51h-.56c-.19 0-.51.07-.78.36-.27.29-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.21 3.04.15.19 2.08 3.17 5.04 4.44.7.3 1.25.48 1.68.61.71.23 1.35.2 1.86.12.57-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34z" /></svg></span></a>

      <footer className="site-footer"><div className="container"><p>DFP TRAVELS - Agenzia Viaggi Online di proprietà DFP CAPITAL SRL - Sede Legale: Corso Padova 83, Vicenza</p><p>SCIA Regione Veneto: Pratica n° 04596800245-10112025-0853 - PEC: dfpcapital@pec.it - P.IVA: 04596800245</p><p className="footer-links"><a href="/privacy">Privacy Policy</a> | <a href="/cookie">Cookie Policy</a></p></div></footer>
      <div className="cookie-banner"><p>This website uses cookies to ensure the best experience. <a href="/cookie">Learn more</a></p><button onClick={() => document.querySelector(".cookie-banner").style.display = "none"}>Accept</button></div>
    </main>
  );
}
