import PropTypes from 'prop-types';
import SlideKeyboardContainer from '../../containers/SlideKeyboardContainer';

const CHARS = [
  "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "🥲", "🥹",
  "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗",
  "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓",
  "😎", "🥸", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕",
  "🙁", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😮", "😤",
  "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰",
  "😥", "😓", "🫣", "🤗", "🫡", "🤔", "🫢", "🤭", "🤫", "🤥",
  "😶", "😐", "😑", "😬", "🫠", "🙄", "😯", "😦", "😧", "😮",
  "😲", "🥱", "😴", "🤤", "😪", "😵", "🫥", "🤐", "🥴", "🤢",
  "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👹",
  "👺", "🤡", "💩", "👻", "💀", "👽", "👾", "🤖", "🎃", "😺",
  "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾",
]

export default function EmojisKeyboard({ onInputClick }) {
  return <SlideKeyboardContainer
            chars={CHARS}
            rows={4}
            columns={10}
            onInputClick={onInputClick}
         />;
}

EmojisKeyboard.propType = {
  onInputClick: PropTypes.func,
};
