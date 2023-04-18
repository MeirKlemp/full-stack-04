import PropTypes from 'prop-types';

export default function TextDesignToolbar({
  style,
  onChange,
}) {
  const handleChange = newStyle => onChange({...style, ...newStyle});
  const handleFontSizeChange = value => {
    if (isNaN(value)) return;
    const boundedValue = Math.max(1, Math.min(400, value));
    handleChange({fontSize: boundedValue});
  };

  return (
    <div style={{display: "flex"}}>
      <div style={{
        backgroundColor: style.color,
        border: "3px solid black",
        minWidth: "1em",
        minHeight: "1em",
        margin: "2px",
      }}></div>
      <input type="text"
        placeholder="Text Color"
        value={style.color}
        onChange={e => handleChange({color: e.target.value})}
      />
      <button
        onClick={e => handleFontSizeChange(parseInt(style.fontSize) - 1)}>
        -
      </button>
      <input type="text"
        value={style.fontSize}
        onChange={e => handleFontSizeChange(parseInt(e.target.value))}
      />
      <button
        onClick={e => handleFontSizeChange(parseInt(style.fontSize) + 1)}>
        +
      </button>
    </div>
  );
}

TextDesignToolbar.propTypes = {
  style: PropTypes.object,
  onChange: PropTypes.func,
};
