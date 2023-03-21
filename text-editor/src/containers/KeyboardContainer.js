import React from 'react';
import PropTypes from 'prop-types';
import ControlsKeyboard from '../components/ControlsKeyboard';
import EnglishQwertyKeyboardContainer from './EnglishQwertyKeyboardContainer';
import SymbolsKeyboardContainer from './SymbolsKeyboardContainer';
import EmojisKeyboardContainer from './EmojisKeyboardContainer';
import HebrewKeyboard from '../components/HebrewKeyboard';
import PhoneKeyboard from '../components/PhoneKeyboard';

export default class KeyboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.defaultKeyboard = "EN";
    this.state = {
      keyboard: this.defaultKeyboard,
    };

    this.handleChangeKeyboard = this.handleChangeKeyboard.bind(this);
  }
  
  render() {
    this.keyboards = {
      "EN": <EnglishQwertyKeyboardContainer
              onInputClick={this.props.onInputClick}
            />,
      "HE": <HebrewKeyboard
              onInputClick={this.props.onInputClick}
            />,
      "01": <PhoneKeyboard
              onInputClick={this.props.onInputClick}
            />,
      "#+": <SymbolsKeyboardContainer
              onInputClick={this.props.onInputClick}
            />,
      "😀": <EmojisKeyboardContainer
              onInputClick={this.props.onInputClick}
            />,
    };

    // TODO: Remove these DOM elements by creating presentational component.
    return (
      <div style={{display: "flex"}}>
        {this.keyboards[this.state.keyboard]}
        <ControlsKeyboard
          selectedKeyboard={this.state.keyboard}
          keyboards={Object.keys(this.keyboards)}
          onChangeKeyboard={this.handleChangeKeyboard}
          onBackspaceClick={this.props.onBackspaceClick}
          onClearClick={this.props.onClearClick}
          onEnterClick={this.props.onEnterClick}
          onUndoClick={this.props.onUndoClick}
          onRedoClick={this.props.onRedoClick}
          undoEnabled={this.props.undoEnabled}
          redoEnabled={this.props.redoEnabled}
        />
      </div>
    );
  }

  handleChangeKeyboard(kb) {
    const keyboard = this.keyboards[kb] ? kb : this.defaultKeyboard;
    this.setState({keyboard: keyboard});
  }
}

KeyboardContainer.propTypes = {
  onInputClick: PropTypes.func,
  onBackspaceClick: PropTypes.func,
  onClearClick: PropTypes.func,
  onEnterClick: PropTypes.func,
  onUndoClick: PropTypes.func,
  onRedoClick: PropTypes.func,
  undoEnabled: PropTypes.bool,
  redoEnabled: PropTypes.bool,
}
