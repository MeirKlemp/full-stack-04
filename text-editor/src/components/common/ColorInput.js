import PropTypes from 'prop-types'
import './ColorInput.css'

export default function ColorInput({
  value,
  onChange,
  placeholder,
}) {
  return (
    <label className="color-input">
      <div className="color-input-color" style={{backgroundColor: value}}>
      </div>
      <input type="text"
        className="color-input-input"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange?.(e.target.value)}
      />
    </label>
  );
}

ColorInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
