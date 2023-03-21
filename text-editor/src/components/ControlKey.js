import PropTypes from 'prop-types';

export const ControlKeyTypes = {
  backspace: 0,
  enter: 1,
}

export default function ControlKey({ type, onClick }) {
  return (
    <button onClick={e => onClick?.()}>{["Backspace", "Enter"][type]}</button>
  );
}

ControlKey.propTypes = {
  type: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};
