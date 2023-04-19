import PropTypes from 'prop-types'
import KeyboardContainer from '../containers/KeyboardContainer';
import TextDesignToolbar from './TextDesignToolbar';
import './InputSection.css';

export default function InputSection({
  style,
  onStyleChange,
  onInputClick,
  onBackspaceClick,
  onClearClick,
  onEnterClick,
  onUpperClick,
  onLowerClick,
  onUndoClick,
  onRedoClick,
  undoEnabled,
  redoEnabled,
}) {
  return (
    <div className="input-section">
      <TextDesignToolbar
        style={style}
        onChange={onStyleChange}
      />
      <KeyboardContainer
        onInputClick={onInputClick}
        onBackspaceClick={onBackspaceClick}
        onClearClick={onClearClick}
        onEnterClick={onEnterClick}
        onUpperClick={onUpperClick}
        onLowerClick={onLowerClick}
        onUndoClick={onUndoClick}
        onRedoClick={onRedoClick}
        undoEnabled={undoEnabled}
        redoEnabled={redoEnabled}
      />
    </div>
  );
}

InputSection.propTypes = {
  style: PropTypes.object,
  onStyleChange: PropTypes.func,
  onInputClick: PropTypes.func,
  onChangeKeyboard: PropTypes.func,
  onBackspaceClick: PropTypes.func,
  onClearClick: PropTypes.func,
  onEnterClick: PropTypes.func,
  onUpperClick: PropTypes.func,
  onLowerClick: PropTypes.func,
  onUndoClick: PropTypes.func,
  onRedoClick: PropTypes.func,
  undoEnabled: PropTypes.bool,
  redoEnabled: PropTypes.bool,
}
