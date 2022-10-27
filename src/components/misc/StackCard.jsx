import "../Stack/stack.css";

function StackCard({ img, text, col }) {
  return (
    <div className={`stack-card ${col}`}>
      <img src={img} alt={text} className="stack-img" />
      <div className="stack-text">{text}</div>
    </div>
  );
}

export default StackCard;
