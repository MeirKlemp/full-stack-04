import PropTypes from 'prop-types';
import './CheckboxButton.css';

export default function CheckboxButton({
  checked,
  onChange,
  className,
  children,
}) {
  return (
    <label className={`checkbox-button ${className}`}>
      <input type="checkbox"
          checked={!!checked}
          onChange={e => onChange?.(e.target.checked)}/>
      <span>{children}</span>
    </label>
  );
}

CheckboxButton.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
};
