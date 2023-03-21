import PropTypes from 'prop-types';

export const ControlKeyTypes = {
  backspace: 0,
  enter: 1,
  space: 2,
  slideLeft: 3,
  slideRight: 4,
}

export default function ControlKey({ type, onClick, enabled = true }) {
  return (
    <button onClick={e => onClick?.()} disabled={!enabled}>
      {["Backspace", "Enter", "Space", "<-", "->"][type]}
    </button>
  );
}

ControlKey.propTypes = {
  type: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  enabled: PropTypes.bool,
};
