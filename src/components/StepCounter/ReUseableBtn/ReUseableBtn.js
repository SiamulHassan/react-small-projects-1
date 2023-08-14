export default function Button({ children, onClicked, textColor, bgColor }) {
  return (
    <button
      onClick={onClicked}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}
