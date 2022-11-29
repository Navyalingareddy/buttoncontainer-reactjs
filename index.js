const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};
const element = (
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button_container">
      <button className="button-1" buttonText="like"></button>
      <button className="button-2" buttonText="Share"></button>
      <button className="button-3" buttonText="subscribe"></button>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
