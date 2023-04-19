import PropTypes from 'prop-types';
import './IntegerInput.css';

export default function IntegerInput({
  value,
  onChange,
  minValue,
  maxValue,
  className,
}) {
  const integerValue = parseInt(value);
  const handleChange = value => {
    if (isNaN(value)) return;
    let boundedValue = value;
    if (minValue) {
      boundedValue = Math.max(minValue, boundedValue);
    }
    if (maxValue) {
      boundedValue = Math.min(maxValue, boundedValue);
    }
    onChange?.(boundedValue);
  };
  return (
    <div className={`integer-input ${className}`}>
      <button className="integer-input-left-button"
        onClick={e => handleChange(integerValue - 1)}
      >-</button>
      <input type="text"
        value={value}
        onChange={e => handleChange(parseInt(e.target.value))}
      />
      <button className="integer-input-right-button"
        onClick={e => handleChange(integerValue + 1)}
      >+</button>
    </div>
  );
}

IntegerInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  className: PropTypes.string,
};
