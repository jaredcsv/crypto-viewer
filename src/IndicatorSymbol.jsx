import PropTypes from 'prop-types';

const IndicatorSymbol = ({ value }) => {
  const getIndicator = () => {
    if (value < 0) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="red"
          width="15px"
          height="15px"
        >
          <polygon points="0,3 12,22 24,3" />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="green"
          width="15px"
          height="15px"
        >
          <polygon points="0,24 12,2 24,24" />
        </svg>
      );
    }
  };

  return (
    <>
      {getIndicator()}
      {value}
    </>
  );
};

IndicatorSymbol.propTypes = {
  value: PropTypes.string.isRequired,
};

export default IndicatorSymbol;
