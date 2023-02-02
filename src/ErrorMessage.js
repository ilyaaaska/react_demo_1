import "./ErrorMessage.css";
const ErrorMessage = (props) => {
  return (
    <div>
      <div className="modal">
        <button className="close-modal" onClick={props.closeBox}>
          &times;
        </button>
        <h1>Invalid Error</h1>
        <p>Please enter valid name and age</p>
      </div>
      <div className="overlay"></div>
    </div>
  );
};
export default ErrorMessage;
