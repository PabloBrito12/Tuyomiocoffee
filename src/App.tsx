import { useEffect, useState } from "react";
import { brand, galleryImages, menuHighlights } from "./content";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "La carta", href: "#menu" },
  { label: "Nuestra esencia", href: "#experiencia" },
  { label: "Visítanos", href: "#ubicacion" },
];

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -32px 0px" });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function Wordmark() {
  return <a className="wordmark" href="#inicio" aria-label="Tuyomio Coffee, inicio">
    <img className="wordmark-logo" src={brand.logoImage} alt="" />
    <span className="wordmark-name">tuyomio<span>coffee</span></span>
  </a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="header-inner">
      <Wordmark />
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}><span /><span /></button>
      <nav id="primary-navigation" className={open ? "navigation is-open" : "navigation"} aria-label="Navegación principal">
        {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a className="nav-reserve" href="#reservas" onClick={() => setOpen(false)}>Cotizá tu evento</a>
      </nav>
    </div>
  </header>;
}

function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <div className={`photo-slot has-image ${className}`}><img className="slot-image" src={src} alt={alt} loading={className.includes("hero") ? "eager" : "lazy"} /></div>;
}

function Hero() {
  return <section className="hero section-wrap" id="inicio">
    <div className="hero-copy">
      <p className="eyebrow">Café y bebidas para compartir</p>
      <h1>Un cafecito<br />siempre cae<br /><em>bien.</em></h1>
      <p className="hero-description">Pasá por algo rico o llevá nuestras bebidas a tu próximo evento.</p>
      <div className="hero-actions"><a className="button button-dark" href="#experiencia">Café para eventos</a><a className="text-link" href="#menu">Ver la carta</a></div>
      <div className="hero-note"><span className="note-rule" /> Buen café, buena compañía.</div>
    </div>
    <div className="hero-visual">
      <Photo src={brand.heroImage} alt="Una pareja comparte bebidas Tuyomio" className="hero-photo" />
      <span className="visual-index">T / M — 01</span>
    </div>
  </section>;
}

function Introduction() {
  return <section className="intro section-wrap" id="historia">
    <div className="section-label reveal"><span>01</span><span>UN MOMENTO TUYO</span></div>
    <div className="intro-copy reveal"><p className="eyebrow">Un buen plan</p><h2>Juntate con los tuyos.<br />Del café <em>nos encargamos.</em></h2><p className="body-copy">Un café en la tarde, una reunión con amigos o una celebración. Aquí estamos para poner las bebidas.</p><a href="#experiencia" className="text-link">Conocé lo que hacemos</a></div>
    <div className="intro-aside reveal"><span className="aside-mark" aria-hidden="true">“</span><p>¿Un café?<br />¡De una!</p><span className="aside-caption">TUYOMIO COFFEE</span></div>
  </section>;
}

function Menu() {
  return <section className="menu-section" id="menu"><div className="section-wrap menu-inner">
    <div className="section-label reveal"><span>02</span><span>PARA DISFRUTAR</span></div>
    <div className="menu-heading reveal"><div><p className="eyebrow">Algo rico para tomar</p><h2>¿Qué se te<br />antoja <em>hoy?</em></h2></div><p className="body-copy">Escribinos por Instagram y te compartimos la carta.</p></div>
    {menuHighlights.length ? <div className="menu-list reveal">{menuHighlights.map((item) => <article className="menu-item" key={item.name}>{item.image && <img src={item.image} alt="" loading="lazy" />}<div><h3>{item.name}</h3><p>{item.description}</p></div>{item.price && <span>{item.price}</span>}</article>)}</div> : <div className="menu-empty reveal"><div><strong>¿Querés ver qué tenemos?</strong><p>Escribinos y te mandamos la carta completa.</p></div><a className="empty-index" href={brand.instagram} target="_blank" rel="noreferrer">Escribinos</a></div>}
  </div></section>;
}

function Experience() {
  return <section className="experience section-wrap" id="experiencia">
    <div className="section-label reveal"><span>03</span><span>ASÍ SE VIVE TUYOMIO</span></div>
    <div className="experience-heading reveal"><p className="eyebrow">También vamos a tu evento</p><h2>Vos ponés el plan.<br />Nosotros, el <em>café.</em></h2></div>
    <p className="experience-intro reveal">Llevamos café y bebidas para reuniones, celebraciones y otros buenos planes. Mirá algunas fotos.</p>
    <div className="gallery">{galleryImages.map((image, index) => <Photo key={image.alt} src={image.src!} alt={image.alt} className={`gallery-photo gallery-${image.position} gallery-${index + 1} reveal`} />)}</div>
    <a className="instagram-link reveal" href={brand.instagram} target="_blank" rel="noreferrer"><span className="instagram-glyph" aria-hidden="true">◎</span>Más fotos en <span className="instagram-handle">@tuyomiocoffee</span></a>
  </section>;
}

function Reservations() {
  const [notice, setNotice] = useState("");
  return <section className="reservation" id="reservas"><div className="reservation-inner section-wrap">
    <div className="reservation-copy reveal"><p className="eyebrow">Para reuniones y celebraciones</p><h2>¿Tenés un evento?<br /><em>Hablemos.</em></h2><p>Contanos la fecha, cuántas personas vienen y qué estás organizando. Vemos cómo acompañarte con café y bebidas.</p><span className="prototype-tag"><i /> FORMULARIO DE DEMOSTRACIÓN</span></div>
    <form className="reservation-form reveal" onSubmit={(event) => { event.preventDefault(); setNotice("¡Gracias! Esta demostración no envía tus datos todavía."); }}>
      <div className="form-title"><span>01 / 01</span><span>DATOS DEL EVENTO</span></div>
      <div className="form-row"><label>Fecha<input type="date" name="date" required /></label><label>Hora<input type="time" name="time" required /></label></div>
      <label>Personas<input type="number" name="guests" min="1" step="1" placeholder="¿Cuántas personas vienen?" required /></label>
      <label>Nombre<input type="text" name="name" autoComplete="name" minLength={3} placeholder="Tu nombre" required /></label>
      <label>Teléfono o correo<input type="text" name="contact" minLength={6} placeholder="Tu número o correo" required /></label>
      <button className="button button-dark form-submit" type="submit">Enviar datos</button><p className="form-disclaimer">Es una muestra: el formulario todavía no envía los datos.</p><p className="form-notice" role="status" aria-live="polite">{notice}</p>
    </form>
  </div></section>;
}

function Location() {
  return <section className="location section-wrap" id="ubicacion"><div className="section-label reveal"><span>04</span><span>ENCUÉNTRANOS</span></div><div className="location-content">
    <div className="reveal"><p className="eyebrow">Estamos por aquí</p><h2>Vení por<br /><em>un café.</em></h2></div>
    <div className="location-details reveal"><div><span className="detail-label">DÓNDE</span><p>Pronto compartimos la dirección.</p></div><div><span className="detail-label">CUÁNDO</span><p>Consultá nuestros horarios en Instagram.</p></div><div><span className="detail-label">CONTACTO</span><p>Mandanos un mensaje directo.</p></div><p className="location-note">Encontranos como <a href={brand.instagram} target="_blank" rel="noreferrer">@tuyomiocoffee</a></p></div>
  </div></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="footer-main section-wrap">
    <div><Wordmark /><p>Café para compartir.</p></div>
    <div className="footer-links"><span className="detail-label">EXPLORA</span><a href="#menu">La carta</a><a href="#experiencia">Nuestra esencia</a><a href="#reservas">Eventos</a></div>
    <div className="footer-links"><span className="detail-label">INSTAGRAM</span><a href={brand.instagram} target="_blank" rel="noreferrer">@tuyomiocoffee</a></div>
  </div><div className="footer-bottom section-wrap"><span>© 2026 TUYOMIO COFFEE</span><span>HECHO PARA DISFRUTAR · EL SALVADOR</span></div></footer>;
}

export default function App() {
  useReveal();
  return <><Header /><main><Hero /><Introduction /><Menu /><Experience /><Reservations /><Location /></main><Footer /></>;
}
