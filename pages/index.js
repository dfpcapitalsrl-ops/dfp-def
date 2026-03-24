export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="container nav">
          <div className="brand">
            <div className="logoBox">DFP</div>
            <div>
              <div className="brandTitle">DFP TRAVELS</div>
              <div className="brandSub">Chauffeur Service & Dolomites Tours</div>
            </div>
          </div>

          <nav className="menu">
            <a href="#services">Servizi</a>
            <a href="#about">Chi siamo</a>
            <a href="#contact">Contatti</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="heroGlow heroGlowLeft"></div>
        <div className="heroGlow heroGlowRight"></div>

        <div className="container heroGrid">
          <div>
            <div className="badge">Luxury Chauffeur Service in the Dolomites</div>
            <h1>Transfer privati e tour esclusivi nelle Dolomiti</h1>
            <p className="heroText">
              DFP Travels offre servizi NCC premium, transfer aeroportuali,
              escursioni private e mobilità elegante per clienti italiani e internazionali.
            </p>

            <div className="heroButtons">
              <a
                className="btn btnGold"
                href="mailto:info@dfptravels.com?subject=Richiesta%20preventivo%20DFP%20Travels"
              >
                Richiedi preventivo
              </a>

              <a className="btn btnLight" href="https://wa.me/390000000000">
                WhatsApp
              </a>
            </div>

            <div className="features">
              <div className="feature">Transfer aeroporti</div>
              <div className="feature">Tour Dolomiti</div>
              <div className="feature">Servizio business & VIP</div>
            </div>
          </div>

          <div className="visualCard">
            <div className="visualTop">
              <span>DFP TRAVELS</span>
              <span className="pill">Premium</span>
            </div>

            <div className="scene">
              <div className="sun"></div>
              <div className="mountain mountain1"></div>
              <div className="mountain mountain2"></div>
              <div className="road"></div>
              <div className="van">
                <div className="window"></div>
                <div className="wheel wheel1"></div>
                <div className="wheel wheel2"></div>
              </div>
            </div>

            <div className="visualBottom">
              <div className="smallCard">
                <small>Service</small>
                <strong>NCC</strong>
              </div>
              <div className="smallCard">
                <small>Area</small>
                <strong>Dolomites</strong>
              </div>
              <div className="smallCard">
                <small>Style</small>
                <strong>Luxury</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="sectionLabel">Servizi</div>
          <h2>Un sito pensato per clienti premium</h2>
          <p className="sectionText">
            Presentazione elegante, chiara e professionale per valorizzare il tuo servizio.
          </p>

          <div className="cards">
            <div className="card">
              <div className="cardIcon">✦</div>
              <h3>Transfer aeroportuali</h3>
              <p>Collegamenti puntuali da e per aeroporti, hotel, stazioni e località turistiche.</p>
            </div>

            <div className="card">
              <div className="cardIcon">✦</div>
              <h3>Tour privati</h3>
              <p>Escursioni esclusive nelle Dolomiti con soste panoramiche e itinerari su misura.</p>
            </div>

            <div className="card">
              <div className="cardIcon">✦</div>
              <h3>Servizio business</h3>
              <p>Mobilità executive per meeting, eventi, ospiti internazionali e clientela VIP.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section sectionAlt">
        <div className="container twoCols">
          <div>
            <div className="sectionLabel">Chi siamo</div>
            <h2>Immagine corporate, spirito hospitality</h2>
            <p className="sectionText">
              Il layout usa una palette elegante con blu notte, oro e bianco, per trasmettere
              lusso, affidabilità e qualità del servizio.
            </p>
          </div>

          <div className="statsBox">
            <div className="stat">
              <strong>24/7</strong>
              <span>Disponibilità</span>
            </div>
            <div className="stat">
              <strong>VIP</strong>
              <span>Esperienza premium</span>
            </div>
            <div className="stat wide">
              <strong>Dolomites</strong>
              <span>Tour su misura, transfer eleganti e accoglienza professionale</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container contactGrid">
          <div>
            <div className="sectionLabel light">Contatti</div>
            <h2>Pronto per ricevere clienti online</h2>
            <p className="contactText">
              Inserisci qui il tuo numero reale, email definitiva, logo finale e foto professionali.
            </p>

            <div className="contactInfo">
              <div><strong>Email:</strong> info@dfptravels.com</div>
              <div><strong>Telefono:</strong> +39 000 000 0000</div>
              <div><strong>WhatsApp:</strong> +39 000 000 0000</div>
            </div>
          </div>

          <div className="contactCard">
            <div className="fakeInput">Nome cliente</div>
            <div className="fakeInput">Email</div>
            <div className="fakeInput big">Richiesta transfer / tour / servizio VIP</div>

            <a
              className="btn btnGold full"
              href="mailto:info@dfptravels.com?subject=Richiesta%20preventivo%20DFP%20Travels"
            >
              Invia richiesta
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
