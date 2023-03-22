import PropTypes from 'prop-types';
import Key from './Key';
import ControlKey, { ControlKeyTypes } from './ControlKey';

export default function SlideKeyboard({
  table,
  onInputClick,
  onSlide,
  canSlideLeft,
  canSlideRight,
}) {
  const charToKey = ch => <Key key={ch} onClick={onInputClick}>{ch}</Key>;
  const rowsExceptLast = table.slice(0, -1).map((row, i) =>
    <div key={i}>
      {row.map(charToKey)}
    </div>
  );
  const lastRow = table[table.length - 1].map(charToKey);
  return (
    <div>
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

SlideKeyboard.propType = {
  table: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.string
  )).isRequired,
  onInputClick: PropTypes.func,
  onSlide: PropTypes.func,
  canSlideLeft: PropTypes.bool,
  canSlideRight: PropTypes.bool,
};
