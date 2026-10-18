import { useState } from 'react';
import Icon from './Icons.jsx';
import SectionHeader from './SectionHeader.jsx';
import { faqs } from '../data.js';

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="section section--muted" id="faq">
      <div className="container container--narrow">
        <SectionHeader
          eyebrow="Pusat Bantuan"
          title="Pertanyaan yang Sering Diajukan"
          subtitle="Jawaban transparan untuk menjawab rasa penasaranmu sebelum memulai pemesanan."
        />
        <div className="faq">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq__item ${isOpen ? 'is-open' : ''}`} key={f.q}>
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {f.q}
                  <Icon name="chevronDown" size={16} className="faq__chev" />
                </button>
                <div className="faq__a" id={`faq-${i}`} role="region">
                  <div><p>{f.a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
