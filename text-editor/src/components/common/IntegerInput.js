import PropTypes from 'prop-types';

export default function IntegerInput({
  value,
  onChange,
  minValue,
  maxValue,
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
    <div style={{display: "flex"}}>
      <button onClick={e => handleChange(integerValue - 1)}>
        -
      </button>
      <input type="text"
        value={value}
        onChange={e => handleChange(parseInt(e.target.value))}
      />
      <button onClick={e => handleChange(integerValue + 1)}>
        +
      </button>
    </div>
  );
}

IntegerInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
};
