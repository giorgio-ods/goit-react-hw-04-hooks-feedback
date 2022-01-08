import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onFeedbackIncrement }) =>
  options.map((option, idx) => (
    <div key={idx}>
      <button onClick={() => onFeedbackIncrement(option)} type="button">
        {option}
      </button>
    </div>
  ));

FeedbackOptions.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;
