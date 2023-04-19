import PropTypes from 'prop-types';
import ColorInput from './common/ColorInput';
import IntegerInput from './common/IntegerInput';
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
      <IntegerInput
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
      <div className="checkbox-button bold-checkbox">
        <label>
          <input type="checkbox"
              checked={style.fontWeight === "bold"}
              onChange={e => handleChange(
                {fontWeight: e.target.checked ? "bold" : "normal"})}/>
          <span>B</span>
        </label>
      </div>
      <div className="checkbox-button italic-checkbox">
        <label>
          <input type="checkbox"
              checked={style.fontStyle === "italic"}
              onChange={e => handleChange(
                {fontStyle: e.target.checked ? "italic" : "normal"})}/>
          <span>I</span>
        </label>
      </div>
      <div className="checkbox-button underline-checkbox">
        <label>
          <input type="checkbox"
              checked={style.textDecoration === "underline"}
              onChange={e => handleChange(
                {textDecoration: e.target.checked ? "underline" : null})}/>
          <span>U</span>
        </label>
      </div>
    </div>
  );
}

TextDesignToolbar.propTypes = {
  style: PropTypes.object,
  onChange: PropTypes.func,
  minFontSize: PropTypes.number,
  maxFontSize: PropTypes.number,
};
