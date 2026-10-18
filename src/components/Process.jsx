import SectionHeader from './SectionHeader.jsx';
import { steps } from '../data.js';

export default function Process() {
  return (
    <section className="section section--sky" id="cara-order">
      <div className="container">
        <SectionHeader
          eyebrow="Proses Kerja"
          title="Alur Pemesanan yang Praktis & Terstruktur"
          subtitle="Hanya butuh 4 langkah mudah dari berkas mentah hingga siap dikirim ke reviewer."
        />
        <ol className="steps">
          {steps.map((s, i) => (
            <li className="step" key={s.title}>
              <span className="step__num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
