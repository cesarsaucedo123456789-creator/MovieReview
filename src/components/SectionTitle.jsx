function SectionTitle({ icon, title }) {
  return (
    <div className="section-title">
      <h2>
        <span>{icon}</span> {title}
      </h2>
    </div>
  );
}

export default SectionTitle;
