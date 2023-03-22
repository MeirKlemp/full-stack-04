import PropTypes from 'prop-types';
import Key from './Key';
import ControlKey, { ControlKeyTypes } from './ControlKey';
import SlideKeyboardContainer from '../containers/SlideKeyboardContainer';

const CHARS_TABLES = [
  [
    ["+", "×", "÷", "=", "%", "/", "\\", "$", "€", "£"],
    ["@", "*", "!", "#", ":", ";", "&", "_", "(", ")"],
    ["©", "|", "¤", "₹", "-", "'", "\"", ",", ".", "?"],
    ["~", "`", "§", "μ", "¬", "Г", "´"],
  ],
  [
    ["￦", "¥", "°", "¿", "¡", "^", "[", "]", "<", ">"],
    ["៛", "₪", "·", "฿", "Ω", "θ", "ฯ", "{", "}"],
    [],
    [],
  ],
];

export default function SymbolsKeyboard({ onInputClick }) {
  return <SlideKeyboardContainer
            tables={CHARS_TABLES}
            onInputClick={onInputClick}
         />;
}

SymbolsKeyboard.propType = {
  onInputClick: PropTypes.func,
};
