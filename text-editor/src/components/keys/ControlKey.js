import PropTypes from 'prop-types';
import './Keys.css';

export const ControlKeyTypes = {
  backspace: 0,
  enter: 1,
  space: 2,
  slideLeft: 3,
  slideRight: 4,
  clear: 5,
  undo: 6,
  redo: 7,
  upperAll: 8,
  lowerAll: 9,
}

const TypesContent = [
  "backspace-key",
  "enter-key",
  "space-key",
  "slide-left-key",
  "slide-right-key",
  "clear-key",
  "undo-key",
  "redo-key",
  "upper-all-key",
  "lower-all-key",
];

export default function ControlKey({ type, onClick, enabled = true }) {
  return (
    <button className={`key icon-key ${TypesContent[type]}`}
      onClick={e => onClick?.()}
      disabled={!enabled}>
      {type === ControlKeyTypes.upperAll && "U"}
      {type === ControlKeyTypes.lowerAll && "l"}
    </button>
  );
}

ControlKey.propTypes = {
  type: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  enabled: PropTypes.bool,
};
