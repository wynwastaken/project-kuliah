export default function SectionHeader({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div className={`section-header section-header--${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
