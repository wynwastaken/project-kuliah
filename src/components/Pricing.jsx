import Icon from './Icons.jsx';
import SectionHeader from './SectionHeader.jsx';
import { plans, waLink } from '../data.js';

export default function Pricing() {
  return (
    <section className="section" id="paket">
      <div className="container">
        <SectionHeader
          eyebrow="Investasi Transparan"
          title="Pilih paket yang sesuai kebutuhanmu"
          subtitle="Investasi terjangkau untuk membuka peluang karir impian di perusahaan ternama."
        />
        <div className="grid grid--3 pricing">
          {plans.map((p) => (
            <div className={`plan ${p.featured ? 'plan--featured' : ''}`} key={p.name}>
              {p.featured && <span className="plan__ribbon">Paling Populer</span>}
              <div className="plan__head">
                <span className="plan__eyebrow">{p.eyebrow}</span>
                {p.tag && <span className="chip chip--soft">{p.tag}</span>}
              </div>
              <h3>{p.name}</h3>
              <p className="plan__desc">{p.desc}</p>
              <div className="plan__price">
                <strong>{p.price}</strong>
                <span>{p.unit}</span>
              </div>
              <ul className="plan__list">
                {p.items.map((it, i) => (
                  <li key={it} className={p.featured || p.tag ? (i === 0 ? 'is-strong' : '') : ''}>
                    <Icon name="checkCircle" size={16} />
                    {it}
                  </li>
                ))}
              </ul>
              <a
                className={`btn btn--block ${p.featured ? 'btn--primary' : 'btn--soft'}`}
                href={waLink(`Halo PortEra, saya ingin memesan paket ${p.name} (${p.price}).`)}
                target="_blank"
                rel="noreferrer"
              >
                Pesan via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
