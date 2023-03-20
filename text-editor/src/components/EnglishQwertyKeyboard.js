import PropTypes from 'prop-types';
import Key from './Key';
import ShiftKey, { ShiftMode } from './ShiftKey';
import BackspaceKey from './BackspaceKey';

const CHARS_TABLE = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

export default function EnglishQwertyKeyboard({
  shiftMode = ShiftMode.normal,
  onInputClick,
  onShiftClick,
  onBackspaceClick,
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
        <BackspaceKey onClick={onBackspaceClick} />
      </div>
    </div>
  );
}

EnglishQwertyKeyboard.propType = {
  shiftMode: PropTypes.number,
  onInputClick: PropTypes.func,
  onShiftClick: PropTypes.func,
  onBackspaceClick: PropTypes.func,
};
