function Badge({ text, color = "#f59e0b" }) {
  const style = {
    background: color,
    color: "black",
    padding: "6px 12px",
    borderRadius: "999px",
    fontWeight: 700,
    display: "inline-block",
  };

  return <span style={style}>{text}</span>;
}

export default Badge;
