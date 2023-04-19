import PropTypes from 'prop-types';
import ColorInput from './common/ColorInput';
import IntegerInput from './common/IntegerInput';
import CheckboxButton from './common/CheckboxButton';
import './TextDesignToolbar.css';

export default function TextDesignToolbar({
  style,
  onChange,
  minFontSize = 1,
  maxFontSize = 400,
}) {
  const handleChange = newStyle => onChange?.({...style, ...newStyle});

  return (
    <div className="text-design-toolbar">
      <ColorInput value={style.color}
        onChange={color => handleChange({color: color})}
        placeholder="Text Color"
      />
      <IntegerInput className="font-size-input"
        value={style.fontSize}
        onChange={value => handleChange({fontSize: value})}
        minValue={minFontSize}
        maxValue={maxFontSize}
      />
      <select value={style.fontFamily}
          onChange={e => handleChange({fontFamily: e.target.value})}>
        <option value="arial">Arial</option>
        <option value="Helvetica">Helvetica</option>
        <option value="verdana">Verdana</option>
        <option value="tahoma">Tahoma</option>
        <option value="trebuchet">Trebuchet</option>
        <option value="times">Times</option>
        <option value="georgia">Georgia</option>
        <option value="garamond">Garamond</option>
        <option value="courier">Courier</option>
        <option value="brush">Brush</option>
      </select>
      <CheckboxButton className="bold-checkbox"
        checked={style.fontWeight === "bold"}
        onChange={checked => handleChange(
          {fontWeight: checked ? "bold" : "normal"})}
      >B</CheckboxButton>
      <CheckboxButton className="italic-checkbox"
        checked={style.fontStyle === "italic"}
        onChange={checked => handleChange(
          {fontStyle: checked ? "italic" : "normal"})}
      >I</CheckboxButton>
      <CheckboxButton className="underline-checkbox"
        checked={style.textDecoration === "underline"}
        onChange={checked => handleChange(
          {textDecoration: checked ? "underline" : null})}
      >U</CheckboxButton>
    </div>
  );
}

TextDesignToolbar.propTypes = {
  style: PropTypes.object,
  onChange: PropTypes.func,
  minFontSize: PropTypes.number,
  maxFontSize: PropTypes.number,
};
