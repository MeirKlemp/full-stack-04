import PropTypes from 'prop-types';
import ControlKey, { ControlKeyTypes } from './ControlKey';
import ComboKey from './ComboKey';

export default function ControlsKeyboard({
  selectedKeyboard,
  keyboards,
  onBackspaceClick,
  onEnterClick,
  onChangeKeyboard,
}) {
  return (
    <div>
      <div>
        <ControlKey
          type={ControlKeyTypes.backspace}
          onClick={onBackspaceClick}
        />
      </div>
      <div>
        <ControlKey
          type={ControlKeyTypes.enter}
          onClick={onEnterClick}
        />
      </div>
      <div>
        <ComboKey
          selected={selectedKeyboard}
          options={keyboards}
          onChange={onChangeKeyboard}
        />
      </div>
    </div>
  );
}

ControlsKeyboard.propTypes = {
  selectedKeyboard: PropTypes.string.isRequired,
  keyboards: PropTypes.arrayOf(PropTypes.string).isRequired,
  onBackspaceClick: PropTypes.func,
  onEnterClick: PropTypes.func,
  onChangeKeyboard: PropTypes.func,
}
