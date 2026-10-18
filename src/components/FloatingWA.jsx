import Icon from './Icons.jsx';
import { waLink } from '../data.js';

export default function FloatingWA() {
  return (
    <a className="floating-wa" href={waLink()} target="_blank" rel="noreferrer">
      <Icon name="chat" size={16} />
      <span>Pesan via WhatsApp</span>
      <i className="floating-wa__ping" />
    </a>
  );
}
