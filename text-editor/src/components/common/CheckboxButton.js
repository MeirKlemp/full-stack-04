import PropTypes from 'prop-types';

export default function CheckboxButton({
  checked,
  onChange,
  className,
  children,
}) {
  return (
    <div className={`checkbox-button ${className}`}>
      <label>
        <input type="checkbox"
            checked={!!checked}
            onChange={e => onChange?.(e.target.checked)}/>
        <span>{children}</span>
      </label>
    </div>
  );
}

CheckboxButton.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
};
