import { useState } from 'react';
import Icon from './Icons.jsx';
import SectionHeader from './SectionHeader.jsx';
import { portfolios, waLink } from '../data.js';

const tabs = [
  { key: 'deck', label: 'Pitch Deck', format: '16:9 Presentation' },
  { key: 'web', label: 'Website', format: 'Responsive Web' },
];

export default function Portfolio() {
  const [active, setActive] = useState('deck');
  const format = tabs.find((t) => t.key === active).format;

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <SectionHeader
          eyebrow="Koleksi Terpilih"
          title="Contoh portfolio buatan kami"
          subtitle="Lihat bagaimana kami merapikan cerita dan karya kamu."
        />

        <div className="tabs" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={active === t.key}
              className={`tabs__btn ${active === t.key ? 'is-active' : ''}`}
              onClick={() => setActive(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid--3" key={active}>
          {portfolios[active].map((p) => (
            <article className="work-card" key={p.title}>
              <div className="work-card__preview">
                <div className="work-card__top">
                  <span className="chip">{p.slide}</span>
                  <span className="mono">{format}</span>
                </div>
                <span className={`badge badge--${p.badgeTone}`}>{p.badge}</span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <div className="work-card__meta">
                  <span>{p.metaLeft}</span>
                  <span className={`tone-${p.metaTone}`}>{p.metaRight}</span>
                </div>
              </div>
              <div className="work-card__body">
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
                <a
                  className="link"
                  href={waLink(`Halo PortEra, saya ingin melihat contoh ${p.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Lihat contoh <Icon name="chevronRight" size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
