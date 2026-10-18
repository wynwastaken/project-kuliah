import { useEffect, useState } from 'react';
import Icon from './Icons.jsx';
import Logo from './Logo.jsx';
import { navLinks, waLink } from '../data.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Logo />

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn--primary navbar__mobile-cta" href={waLink()} target="_blank" rel="noreferrer">
            Pesan via WhatsApp
          </a>
        </nav>

        <a className="btn btn--primary navbar__cta" href={waLink()} target="_blank" rel="noreferrer">
          Pesan via WhatsApp
        </a>

        <button
          className="navbar__toggle"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>
    </header>
  );
}
