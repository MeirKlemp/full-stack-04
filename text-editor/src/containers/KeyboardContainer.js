import React from 'react';
import PropTypes from 'prop-types';
import Keyboard from '../components/keyboards/Keyboard';
import EnglishQwertyKeyboardContainer from './EnglishQwertyKeyboardContainer';
import SymbolsKeyboard from '../components/keyboards/SymbolsKeyboard';
import EmojisKeyboard from '../components/keyboards/EmojisKeyboard';
import HebrewKeyboard from '../components/keyboards/HebrewKeyboard';
import PhoneKeyboard from '../components/keyboards/PhoneKeyboard';

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
      "#+": <SymbolsKeyboard
              onInputClick={this.props.onInputClick}
            />,
      "😀": <EmojisKeyboard
              onInputClick={this.props.onInputClick}
            />,
    };

    return <Keyboard
             keyboardElement={this.keyboards[this.state.keyboard]}
             keyboard={this.state.keyboard}
             keyboards={Object.keys(this.keyboards)}
             onChangeKeyboard={this.handleChangeKeyboard}
             onBackspaceClick={this.props.onBackspaceClick}
             onClearClick={this.props.onClearClick}
             onEnterClick={this.props.onEnterClick}
             onUndoClick={this.props.onUndoClick}
             onRedoClick={this.props.onRedoClick}
             undoEnabled={this.props.undoEnabled}
             redoEnabled={this.props.redoEnabled}
           />;
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
