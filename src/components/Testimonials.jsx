import Icon from './Icons.jsx';
import SectionHeader from './SectionHeader.jsx';
import { testimonials } from '../data.js';

export default function Testimonials() {
  return (
    <section className="section" id="testimoni">
      <div className="container">
        <SectionHeader
          eyebrow="Kisah Nyata"
          title="Cerita Sukses Rekan Mahasiswa"
          subtitle="Pengalaman nyata mereka yang telah mempercayakan kurasi portfolionya pada PortEra."
        />
        <div className="grid grid--3">
          {testimonials.map((t) => (
            <figure className="testi" key={t.name}>
              <div className="testi__stars" aria-label="5 dari 5 bintang">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" size={15} filled />
                ))}
              </div>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <span className="testi__avatar">{t.initials}</span>
                <span>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
