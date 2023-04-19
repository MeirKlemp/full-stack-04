import PropTypes from 'prop-types';
import Key from '../keys/Key';
import ControlKey, { ControlKeyTypes } from '../keys/ControlKey';

export default function SlideKeyboard({
  chars,
  rows,
  columns,
  onInputClick,
  onSlide,
  canSlideLeft,
  canSlideRight,
}) {
  const charToKey = ch => <Key key={ch} onClick={onInputClick}>{ch}</Key>;
  const rowsExceptLast =
    splitArray(chars.slice(0, columns * (rows - 1)), columns)
    .map((row, i) => <div key={i}>{row.map(charToKey)}</div>);
  const lastRow = chars.slice(columns * (rows - 1)).map(charToKey);
  return (
    <div className="input-keyboard">
      {rowsExceptLast}
      <div>
        <ControlKey
          type={ControlKeyTypes.slideLeft}
          onClick={() => onSlide(true)}
          enabled={canSlideLeft}
        />
        <ControlKey
          type={ControlKeyTypes.slideRight}
          onClick={() => onSlide(false)}
          enabled={canSlideRight}
        />
        {lastRow}
      </div>
    </div>
  );
}

function splitArray(arr, length) {
  arr = arr.slice(0);
  const result = []
  while (arr.length > 0) {
    result.push(arr.splice(0, length));
  }
  return result
}

SlideKeyboard.propType = {
  chars: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
  onInputClick: PropTypes.func,
  onSlide: PropTypes.func,
  canSlideLeft: PropTypes.bool,
  canSlideRight: PropTypes.bool,
};
