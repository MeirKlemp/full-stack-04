import PropTypes from 'prop-types';
import SlideKeyboardContainer from '../../containers/SlideKeyboardContainer';

const CHARS = [
  "+", "×", "÷", "=", "%", "/", "\\", "$", "€", "£",
  "@", "*", "!", "#", ":", ";", "&", "_", "(", ")",
  "©", "|", "¤", "₹", "-", "'", "\"", ",", ".", "?",
  "~", "`", "§", "μ", "¬", "Г", "´", "￦", "¥", "°",
  "¿", "¡", "^", "[", "]", "<", ">", "៛", "₪", "·",
  "฿", "Ω", "θ", "ฯ", "{", "}",
];

export default function SymbolsKeyboard({ onInputClick }) {
  return <SlideKeyboardContainer
            chars={CHARS}
            rows={4}
            columns={10}
            onInputClick={onInputClick}
         />;
}

SymbolsKeyboard.propType = {
  onInputClick: PropTypes.func,
};
