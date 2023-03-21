import PropTypes from 'prop-types';
import Key from './Key';
import ControlKey, { ControlKeyTypes } from './ControlKey';

const CHARS_TABLES = [
  [
    ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "🥲", "🥹"],
    ["😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗"],
    ["😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓"],
    ["😎", "🥸", "🤩", "🥳", "😏", "😒", "😞", "😔"],
  ],
  [
    ["😟", "😕", "🙁", "😣", "😖", "😫", "😩", "🥺", "😢", "😭"],
    ["😮", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😱"],
    ["😨", "😰", "😥", "😓", "🫣", "🤗", "🫡", "🤔", "🫢", "🤭"],
    ["🤫", "🤥", "😶", "😐", "😑", "😬", "🫠", "🙄"],
  ],
  [
    ["😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😵"],
    ["🫥", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑"],
    ["🤠", "😈", "👿", "👹", "👺", "🤡", "💩", "👻", "💀", "👽"],
    ["👾", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼"],
  ],
  [
    ["😽", "🙀", "😿", "😾"],
    [],
    [],
    [],
  ],
];

export default function EmojisKeyboard({
  tableNum,
  onInputClick,
  onSlide,
}) {
  const charToKey = ch => <Key key={ch} onClick={onInputClick}>{ch}</Key>;
  const charsRow1 = CHARS_TABLES[tableNum][0].map(charToKey);
  const charsRow2 = CHARS_TABLES[tableNum][1].map(charToKey);
  const charsRow3 = CHARS_TABLES[tableNum][2].map(charToKey);
  const charsRow4 = CHARS_TABLES[tableNum][3].map(charToKey);
  return (
    <div>
      <div>
        {charsRow1}
      </div>
      <div>
        {charsRow2}
      </div>
      <div>
        {charsRow3}
      </div>
      <div>
        <ControlKey
          type={ControlKeyTypes.slideLeft}
          onClick={() => onSlide(true)}
          enabled={tableNum > 0}
        />
        <ControlKey
          type={ControlKeyTypes.slideRight}
          onClick={() => onSlide(false)}
          enabled={tableNum < CHARS_TABLES.length - 1}
        />
        {charsRow4}
      </div>
    </div>
  );
}

EmojisKeyboard.propType = {
  tableNum: PropTypes.number.isRequired,
  onInputClick: PropTypes.func,
  onSlide: PropTypes.func,
};
