import Logo from './Logo.jsx';
import { navLinks } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Logo />
            <p className="footer__about">
              Layanan pembuatan portfolio pitch deck dan website profesional untuk mahasiswa, siap bersaing di
              magang, beasiswa, dan program global.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Layanan</h4>
            <ul>
              <li><a href="#paket">Pitch Deck Portfolio</a></li>
              <li><a href="#paket">Website Portfolio</a></li>
              <li><a href="#paket">Bundle Deck + Website</a></li>
            </ul>
          </div>

          <div>
            <h4>Kontak &amp; Media Sosial</h4>
            <dl className="footer__contact">
              <dt>WhatsApp</dt>
              <dd>+62 8XX-XXXX-XXXX</dd>
              <dt>Instagram</dt>
              <dd>@porteradesign</dd>
              <dt>Jam Kerja</dt>
              <dd>Senin - Sabtu (09.00 - 20.00 WIB)</dd>
            </dl>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} PortEra Enterprise Services. Hak cipta dilindungi undang-undang.</span>
          <span className="footer__legal">
            <a href="#">Kebijakan Privasi</a>
            <a href="#">Syarat &amp; Ketentuan</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
