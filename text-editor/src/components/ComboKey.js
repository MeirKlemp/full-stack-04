import PropTypes from 'prop-types';

export default function ComboKey({ selected, options, onChange }) {
  return (
    <select
      value={selected}
      onChange={e => onChange?.(e.target.value)}
    >
      {options.map(op => <option value={op}>{op}</option>)}
    </select>
  );
}

ComboKey.propTypes = {
  selected: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func,
};
