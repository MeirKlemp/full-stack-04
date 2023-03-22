import PropTypes from 'prop-types'
import ControlsKeyboard from './ControlsKeyboard';

export default function Keyboard({
  keyboardElement,
  keyboard,
  keyboards,
  onChangeKeyboard,
  onBackspaceClick,
  onClearClick,
  onEnterClick,
  onUndoClick,
  onRedoClick,
  undoEnabled,
  redoEnabled,
}) {
    return (
      <div style={{display: "flex"}}>
        {keyboardElement}
        <ControlsKeyboard
          selectedKeyboard={keyboard}
          keyboards={keyboards}
          onChangeKeyboard={onChangeKeyboard}
          onBackspaceClick={onBackspaceClick}
          onClearClick={onClearClick}
          onEnterClick={onEnterClick}
          onUndoClick={onUndoClick}
          onRedoClick={onRedoClick}
          undoEnabled={undoEnabled}
          redoEnabled={redoEnabled}
        />
      </div>
    );
}

Keyboard.propTypes = {
  keyboardElement: PropTypes.element,
  keyboard: PropTypes.string,
  keyboards: PropTypes.arrayOf(PropTypes.string),
  onChangeKeyboard: PropTypes.func,
  onBackspaceClick: PropTypes.func,
  onClearClick: PropTypes.func,
  onEnterClick: PropTypes.func,
  onUndoClick: PropTypes.func,
  onRedoClick: PropTypes.func,
  undoEnabled: PropTypes.bool,
  redoEnabled: PropTypes.bool,
}
