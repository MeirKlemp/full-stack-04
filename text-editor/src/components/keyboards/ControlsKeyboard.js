import PropTypes from 'prop-types';
import ControlKey, { ControlKeyTypes } from '../keys/ControlKey';
import ComboKey from '../keys/ComboKey';

export default function ControlsKeyboard({
  selectedKeyboard,
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
    <div>
      <div>
        <ControlKey
          type={ControlKeyTypes.backspace}
          onClick={onBackspaceClick}
        />
        <ControlKey
          type={ControlKeyTypes.clear}
          onClick={onClearClick}
        />
      </div>
      <div>
        <ControlKey
          type={ControlKeyTypes.enter}
          onClick={onEnterClick}
        />
        <ControlKey
          type={ControlKeyTypes.undo}
          onClick={onUndoClick}
          enabled={undoEnabled}
        />
      </div>
      <div>
        <ComboKey
          selected={selectedKeyboard}
          options={keyboards}
          onChange={onChangeKeyboard}
        />
        <ControlKey
          type={ControlKeyTypes.redo}
          onClick={onRedoClick}
          enabled={redoEnabled}
        />
      </div>
    </div>
  );
}

ControlsKeyboard.propTypes = {
  selectedKeyboard: PropTypes.string.isRequired,
  keyboards: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeKeyboard: PropTypes.func,
  onBackspaceClick: PropTypes.func,
  onClearClick: PropTypes.func,
  onEnterClick: PropTypes.func,
  onUndoClick: PropTypes.func,
  onRedoClick: PropTypes.func,
  undoEnabled: PropTypes.bool,
  redoEnabled: PropTypes.bool,
}
