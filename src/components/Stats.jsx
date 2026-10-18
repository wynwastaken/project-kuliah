import Icon from './Icons.jsx';
import { stats } from '../data.js';

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__inner">
        <div className="stats__proof">
          <span className="stats__check"><Icon name="check" size={16} /></span>
          Client kami berhasil diterima di Apple Developer Academy
        </div>
        <div className="stats__list">
          {stats.map((s) => (
            <div key={s.label} className="stats__item">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
