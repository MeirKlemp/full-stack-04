import PropTypes from 'prop-types';

export default function TextDesignToolbar({
  style,
  onChange,
}) {
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
        onChange={e => onChange({...style, color: e.target.value})}
      />
    </div>
  );
}

TextDesignToolbar.propTypes = {
  style: PropTypes.object,
  onChange: PropTypes.func,
};
