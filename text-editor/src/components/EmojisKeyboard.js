import PropTypes from 'prop-types';
import Key from './Key';
import ControlKey, { ControlKeyTypes } from './ControlKey';
import SlideKeyboardContainer from '../containers/SlideKeyboardContainer';

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

export default function EmojisKeyboard({ onInputClick }) {
  return <SlideKeyboardContainer
            tables={CHARS_TABLES}
            onInputClick={onInputClick}
         />;
}

EmojisKeyboard.propType = {
  onInputClick: PropTypes.func,
};
