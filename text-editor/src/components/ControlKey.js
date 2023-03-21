import PropTypes from 'prop-types';

export const ControlKeyTypes = {
  backspace: 0,
  enter: 1,
  space: 2,
  slideLeft: 3,
  slideRight: 4,
  clear: 5,
  undo: 6,
  redo: 7,
}

const TypesContent = [
  "Backspace",
  "Enter",
  "Space",
  "<-",
  "->",
  "Clear",
  "Undo",
  "Redo",
];

export default function ControlKey({ type, onClick, enabled = true }) {
  return (
    <button onClick={e => onClick?.()} disabled={!enabled}>
      {TypesContent[type]}
    </button>
  );
}

ControlKey.propTypes = {
  type: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  enabled: PropTypes.bool,
};
