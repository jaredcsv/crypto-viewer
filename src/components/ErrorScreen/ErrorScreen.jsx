import PropTypes from "prop-types";
import "./ErrorScreen.css"

function ErrorScreen({ value }) {
  return (
    <div className="error-container">
      <h1 className="error-title">Sorry!</h1>
      <p className="error-message">
        {value !== undefined ? value : "An error occurred."}
      </p>
      <p className="error-details">See Console for details or Try later</p>
    </div>
  );
}

ErrorScreen.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ErrorScreen;
