import PropTypes from 'prop-types';
import './Keys.css';

export default function ComboKey({ selected, options, onChange }) {
  return (
    <select className="combo-key"
      value={selected}
      onChange={e => onChange?.(e.target.value)}
    >
      {options.map(op => <option key={op} value={op}>{op}</option>)}
    </select>
  );
}

ComboKey.propTypes = {
  selected: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func,
};
