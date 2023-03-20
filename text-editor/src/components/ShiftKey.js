import PropTypes from 'prop-types';

export const ShiftMode = {
  normal: 0,
  capital: 1,
  capslock: 2,
  numModes: 3,
};

export default function ShiftKey({ shiftMode = ShiftMode.normal, onClick }) {
  return (
    <button onClick={e => onClick?.()}>
      {['^', '^^', 'CL'][shiftMode]}
    </button>
  );
}

ShiftKey.propTypes = {
  shiftMode: PropTypes.number,
  onClick: PropTypes.func,
};
