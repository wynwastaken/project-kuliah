export default function Logo({ href = '#top' }) {
  return (
    <a href={href} className="logo" aria-label="PortEra beranda">
      <span className="logo__mark">P</span>
      <span className="logo__text">
        Port<span>Era</span>
      </span>
    </a>
  );
}
