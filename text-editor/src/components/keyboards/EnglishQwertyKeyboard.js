import PropTypes from 'prop-types';
import Key from '../keys/Key';
import ControlKey, { ControlKeyTypes } from '../keys/ControlKey';
import ShiftKey, { ShiftMode } from '../keys/ShiftKey';

const CHARS_TABLE = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

export default function EnglishQwertyKeyboard({
  shiftMode = ShiftMode.normal,
  onInputClick,
  onShiftClick,
}) {
  const capitalChar = ch => shiftMode === ShiftMode.normal ?
    ch.toLowerCase() : ch.toUpperCase();
  const charToKey = ch =>
    <Key key={ch} onClick={onInputClick}>{capitalChar(ch)}</Key>;
  const charsRow1 = CHARS_TABLE[0].map(charToKey);
  const charsRow2 = CHARS_TABLE[1].map(charToKey);
  const charsRow3 = CHARS_TABLE[2].map(charToKey);
  return (
    <div>
      <div>
        {charsRow1}
      </div>
      <div>
        {charsRow2}
      </div>
      <div>
        <ShiftKey shiftMode={shiftMode} onClick={onShiftClick} />
        {charsRow3}
      </div>
      <div>
        <ControlKey
          type={ControlKeyTypes.space}
          onClick={() => onInputClick(' ')}
        />
      </div>
    </div>
  );
}


EnglishQwertyKeyboard.propType = {
  shiftMode: PropTypes.number,
  onInputClick: PropTypes.func,
  onShiftClick: PropTypes.func,
};
