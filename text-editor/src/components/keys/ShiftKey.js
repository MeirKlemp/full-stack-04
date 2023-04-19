import PropTypes from 'prop-types';
import './Keys.css';

export const ShiftMode = {
  normal: 0,
  capital: 1,
  capslock: 2,
  numModes: 3,
};

const ShiftClasses = [
  "shift-key",
  "shift-key",
  "capslock-key",
]

export default function ShiftKey({ shiftMode = ShiftMode.normal, onClick }) {
  return (
    <button className={`key icon-key ${ShiftClasses[shiftMode]}`}
      onClick={e => onClick?.()}>
    </button>
  );
}

ShiftKey.propTypes = {
  shiftMode: PropTypes.number,
  onClick: PropTypes.func,
};
