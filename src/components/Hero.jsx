import Icon from './Icons.jsx';
import { waLink } from '../data.js';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow hero__glow--a" />
      <div className="hero__glow hero__glow--b" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="pill">
            <span className="pill__dot" /> Jasa Pembuatan Portfolio Mahasiswa
          </span>
          <h1>Portfolio yang Bikin Kamu Dilirik Recruiter</h1>
          <p className="hero__lead">
            Kami bantu mahasiswa membuat portfolio berbentuk pitch deck atau website yang profesional, rapi,
            dan siap dikirim untuk magang, beasiswa, dan program bergengsi.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href={waLink()} target="_blank" rel="noreferrer">
              Pesan via WhatsApp <Icon name="arrowRight" size={16} />
            </a>
            <a className="btn btn--ghost-light btn--lg" href="#paket">
              Lihat paket <Icon name="chevronRight" size={16} />
            </a>
          </div>

          <ul className="hero__badges">
            <li><Icon name="checkCircle" size={15} /> Standar Kurikulum Industri</li>
            <li><Icon name="timer" size={15} /> Pengerjaan Cepat 3-7 Hari</li>
            <li><Icon name="shuffle" size={15} /> Konsultasi 1-on-1</li>
          </ul>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="mock" aria-hidden="true">
      {/* Laptop / tablet */}
      <div className="mock__screen">
        <div className="mock__screen-top">
          <div className="mock__bar" />
          <div className="mock__bar mock__bar--short" />
          <div className="mock__lines">
            <span /> <span /> <span />
          </div>
        </div>
        <div className="mock__metrics">
          <div>
            <small>Impact</small>
            <strong>+34% Registrasi</strong>
          </div>
          <div>
            <small>Tools</small>
            <strong>Figma • React</strong>
          </div>
        </div>
      </div>

      {/* Slide card */}
      <div className="mock__slide">
        <div className="mock__slide-head">
          <span>Slide 03 • Problem &amp; Solution</span>
          <em>STAR</em>
        </div>
        <div className="mock__quote">“Menyederhanakan alur transaksi kompleks menjadi 3 langkah cepat.”</div>
        <div className="mock__progress">
          <div className="mock__progress-track"><div className="mock__progress-fill" /></div>
          <span>99.8% CSAT</span>
        </div>
      </div>

      {/* Phone */}
      <div className="mock__phone">
        <div className="mock__phone-notch" />
        <div className="mock__avatar">D</div>
        <strong>Dimas N.</strong>
        <small>UI/UX Engineer</small>
        <div className="mock__phone-btn">Hubungi Saya</div>
      </div>
    </div>
  );
}
