import PropTypes from 'prop-types';
import Key from './Key';
import ControlKey, { ControlKeyTypes } from './ControlKey';

const CHARS_TABLE = [
  ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'],
  ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך'],
  ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ'],
];

export default function HebrewKeyboard({ onInputClick }) {
  const charToKey = ch => <Key key={ch} onClick={onInputClick}>{ch}</Key>;
  const keyboard = CHARS_TABLE.map(
    row => <div key={row[0]}>{row.map(charToKey)}</div>);
  return (
    <div>
      {keyboard}
      <div>
        <ControlKey
          type={ControlKeyTypes.space}
          onClick={() => onInputClick(' ')}
        />
      </div>
    </div>
  );
}

HebrewKeyboard.propType = {
  onInputClick: PropTypes.func,
};
