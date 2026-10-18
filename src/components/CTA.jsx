import Icon from './Icons.jsx';
import { waLink } from '../data.js';

export default function CTA() {
  return (
    <section className="cta">
      <div className="hero__glow hero__glow--a" />
      <div className="container cta__inner">
        <h2>Siap bikin portfolio yang menonjol?</h2>
        <p>
          Jangan biarkan prestasimu terlewat oleh rekruter. Konsultasikan kebutuhan portfoliomu bersama tim
          kurator PortEra sekarang.
        </p>
        <a className="btn btn--primary btn--lg" href={waLink()} target="_blank" rel="noreferrer">
          Pesan via WhatsApp <Icon name="arrowRight" size={16} />
        </a>
      </div>
    </section>
  );
}
