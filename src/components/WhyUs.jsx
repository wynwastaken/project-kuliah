import Icon from './Icons.jsx';
import SectionHeader from './SectionHeader.jsx';
import { features } from '../data.js';

export default function WhyUs() {
  return (
    <section className="section section--muted" id="kenapa">
      <div className="container">
        <SectionHeader
          align="left"
          eyebrow="Keunggulan PortEra"
          title="Kenapa Mahasiswa Memilih Kami?"
          subtitle="Kami bukan sekadar pembuat slide, melainkan kurator pencapaian profesional Anda."
        />
        <div className="grid grid--4">
          {features.map((f) => (
            <div className="feature" key={f.title}>
              <span className="feature__icon"><Icon name={f.icon} size={20} /></span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <span className="feature__tag">{f.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
