import { useState } from "react";
import { brand, galleryImages, menuHighlights } from "./content";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Menú", href: "#menu" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Ubicación", href: "#ubicacion" },
];

function Wordmark() {
  return (
    <a className="wordmark" href="#inicio" aria-label="Tuyomio Coffee, inicio">
      <img className="wordmark-logo" src={brand.logoImage} alt="" />
      <span className="wordmark-name">Tuyomio<span>Coffee</span></span>
    </a>
  );
}

function PhotoSlot({ label, src, className = "" }: { label: string; src?: string; className?: string }) {
  return (
    <div className={`photo-slot ${src ? "has-image" : ""} ${className}`} role={src ? undefined : "img"} aria-label={src ? undefined : `Espacio reservado para fotografía real: ${label}`}>
      {src ? (
        <img className="slot-image" src={src} alt={label} loading={className.includes("hero") ? "eager" : "lazy"} />
      ) : (
        <>
          <span className="photo-slot-mark" aria-hidden="true">t.</span>
          <span className="photo-slot-caption">Fotografía Tuyomio pendiente</span>
        </>
      )}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Wordmark />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen(!open)}
        >
          <span /><span />
        </button>
        <nav id="primary-navigation" className={open ? "navigation is-open" : "navigation"} aria-label="Navegación principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <a className="nav-reserve" href="#reservas" onClick={() => setOpen(false)}>Reservar una mesa <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> Un espacio para disfrutar</p>
        <h1>Un lugar<br />para volver <em>a ti.</em></h1>
        <p className="hero-description">Una pausa en medio del día. Un momento que se siente tuyo.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#reservas">Reservar una mesa <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="#menu">Descubrir el menú <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-note"><span className="note-rule" /> Café, conversación y tiempo para ti.</div>
      </div>
      <div className="hero-visual">
        <PhotoSlot label="Vaso de café de Tuyomio en primer plano" src={brand.heroImage || undefined} className="hero-photo" />
        <div className="hero-stamp" aria-hidden="true"><span>hecho</span><span>para ti</span><i>✳</i></div>
        <span className="visual-index">01 — 03</span>
      </div>
      <a className="scroll-cue" href="#historia" aria-label="Desplazarse a la presentación">BAJÁ <span>↓</span></a>
    </section>
  );
}

function Introduction() {
  return (
    <section className="intro section-wrap" id="historia">
      <div className="section-label"><span>01</span><span>UN MOMENTO TUYO</span></div>
      <div className="intro-copy">
        <p className="eyebrow">Bienvenido a Tuyomio</p>
        <h2>Hay días que piden<br />ir <em>un poco más despacio.</em></h2>
        <p className="body-copy">Pasá por un café. Quedate un rato. Hacé del momento algo tuyo, a tu manera.</p>
        <a href="#experiencia" className="text-link">Conocé el espacio <span aria-hidden="true">↗</span></a>
      </div>
      <div className="intro-aside">
        <span className="aside-mark" aria-hidden="true">“</span>
        <p>Un buen momento<br />no necesita prisa.</p>
        <span className="aside-caption">TUYOMIO COFFEE</span>
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section className="menu-section" id="menu">
      <div className="section-wrap menu-inner">
        <div className="section-label"><span>02</span><span>PARA DESCUBRIR</span></div>
        <div className="menu-heading">
          <div>
            <p className="eyebrow">Un primer vistazo</p>
            <h2>Algo rico,<br /><em>a tu ritmo.</em></h2>
          </div>
          <p className="body-copy">La carta y sus precios están pendientes de confirmación.</p>
        </div>
        {menuHighlights.length ? (
          <div className="menu-list">
            {menuHighlights.map((item) => (
              <article className="menu-item" key={item.name}>
                {item.image && <img src={item.image} alt="" loading="lazy" />}
                <div><h3>{item.name}</h3><p>{item.description}</p></div>
                {item.price && <span>{item.price}</span>}
              </article>
            ))}
          </div>
        ) : (
          <div className="menu-empty">
            <span className="empty-spark" aria-hidden="true">✳</span>
            <div><strong>Detalles de la carta pendientes.</strong><p>No publicamos opciones ni precios sin confirmarlos.</p></div>
            <span className="empty-index">MENÚ / 2026</span>
          </div>
        )}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience section-wrap" id="experiencia">
      <div className="section-label"><span>03</span><span>TUYOMIO EN EVENTOS</span></div>
      <div className="experience-heading">
        <p className="eyebrow">Bebidas y momentos compartidos</p>
        <h2>Café para compartir.<br /><em>Momentos para recordar.</em></h2>
      </div>
      <p className="experience-intro">Bebidas, preparación y montajes para eventos, en imágenes compartidas por Tuyomio.</p>
      <div className="gallery">
        {galleryImages.map((image, index) => (
          <PhotoSlot key={image.alt} label={image.alt} src={image.src} className={`gallery-photo gallery-${image.position} gallery-${index + 1}`} />
        ))}
      </div>
      <a className="instagram-link" href={brand.instagram} target="_blank" rel="noreferrer">
        <span className="instagram-glyph" aria-hidden="true">◎</span>
        Sigue el día a día <span className="instagram-handle">@tuyomioco</span>
        <span className="instagram-arrow" aria-hidden="true">↗</span>
      </a>
    </section>
  );
}

function Reservations() {
  const [notice, setNotice] = useState("");
  return (
    <section className="reservation" id="reservas">
      <div className="reservation-inner section-wrap">
        <div className="reservation-copy">
          <p className="eyebrow">Tu momento empieza aquí</p>
          <h2>¿Hacemos<br /><em>un espacio?</em></h2>
          <p>Este formulario es una muestra de cómo podría funcionar una reserva. Tus datos no se envían ni se guardan.</p>
          <span className="prototype-tag"><i /> PROTOTIPO · NO ENVÍA LA SOLICITUD</span>
        </div>
        <form className="reservation-form" onSubmit={(event) => {
          event.preventDefault();
          setNotice("La solicitud no se envió ni se guardó; este formulario es solo una muestra.");
        }}>
          <div className="form-title"><span>01 / 01</span><span>DATOS PARA TU VISITA</span></div>
          <div className="form-row">
            <label>Fecha<input type="date" name="date" required onInvalid={(event) => event.currentTarget.setCustomValidity("Elegí una fecha válida para continuar.")} onChange={(event) => event.currentTarget.setCustomValidity("")} /></label>
            <label>Hora<input type="time" name="time" required onInvalid={(event) => event.currentTarget.setCustomValidity("Elegí una hora para continuar.")} onChange={(event) => event.currentTarget.setCustomValidity("")} /></label>
          </div>
          <label>Número de personas<input type="number" name="guests" min="1" step="1" placeholder="¿Cuántas personas?" required onInvalid={(event) => event.currentTarget.setCustomValidity("Ingresá una cantidad válida de personas.")} onChange={(event) => event.currentTarget.setCustomValidity("")} /></label>
          <label>Nombre completo<input type="text" name="name" autoComplete="name" minLength={3} placeholder="Tu nombre y apellido" required onInvalid={(event) => event.currentTarget.setCustomValidity("Escribí tu nombre completo para continuar.")} onChange={(event) => event.currentTarget.setCustomValidity("")} /></label>
          <label>Teléfono<input type="tel" name="phone" autoComplete="tel" inputMode="tel" minLength={8} maxLength={20} placeholder="Tu número de contacto" required onInvalid={(event) => event.currentTarget.setCustomValidity("Ingresá un número de teléfono válido.")} onChange={(event) => event.currentTarget.setCustomValidity("")} /></label>
          <button className="button button-dark form-submit" type="submit">Probar datos de reserva <span aria-hidden="true">↗</span></button>
          <p className="form-disclaimer">Prototipo visual: no contacta con el establecimiento.</p>
          <p className="form-notice" role="status" aria-live="polite">{notice}</p>
        </form>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="location section-wrap" id="ubicacion">
      <div className="section-label"><span>04</span><span>ENCUÉNTRANOS</span></div>
      <div className="location-content">
        <div>
          <p className="eyebrow">La visita empieza por aquí</p>
          <h2>Nos vemos<br /><em>pronto.</em></h2>
        </div>
        <div className="location-details">
          <div><span className="detail-label">DÓNDE</span><p>Dirección pendiente de confirmar.</p></div>
          <div><span className="detail-label">CUÁNDO</span><p>Horario pendiente de confirmar.</p></div>
          <div><span className="detail-label">CONTACTO</span><p>Contacto pendiente de confirmar.</p></div>
          <p className="location-note">Agregaremos la información oficial cuando esté confirmada.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-wrap">
        <div><Wordmark /><p>Una pausa que se siente tuya.</p></div>
        <div className="footer-links">
          <span className="detail-label">EXPLORA</span>
          <a href="#menu">Menú</a><a href="#experiencia">Experiencia</a><a href="#reservas">Reservas</a>
        </div>
        <div className="footer-links">
          <span className="detail-label">SEGUINOS</span>
          <a href={brand.instagram} target="_blank" rel="noreferrer">@tuyomioco ↗</a>
        </div>
      </div>
      <div className="footer-bottom section-wrap"><span>© 2026 TUYOMIO COFFEE</span><span>DISEÑADO CON CUIDADO · ARBRIZA AGENCY</span></div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Menu />
        <Experience />
        <Reservations />
        <Location />
      </main>
      <Footer />
    </>
  );
}
