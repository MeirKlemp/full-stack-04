import PropTypes from 'prop-types';
import Key from '../keys/Key';

const CHARS_TABLE = [
  ['7', '8', '9'],
  ['4', '5', '6'],
  ['1', '2', '3'],
  [',', '0', '.'],
];

export default function PhoneKeyboard({ onInputClick }) {
  const charToKey = ch => <Key key={ch} onClick={onInputClick}>{ch}</Key>;
  const keyboard = CHARS_TABLE.map(
    row => <div key={row[0]}>{row.map(charToKey)}</div>);
  return (
    <div className="input-keyboard">
      {keyboard}
    </div>
  );
}

PhoneKeyboard.propType = {
  onInputClick: PropTypes.func,
};
