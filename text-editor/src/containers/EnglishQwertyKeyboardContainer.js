import React from 'react';
import PropTypes from 'prop-types';
import EnglishQwertyKeyboard from '../components/EnglishQwertyKeyboard';
import { ShiftMode } from '../components/ShiftKey';

export default class EnglishQwertyKeyboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shiftMode: ShiftMode.normal,
    };

    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleShiftClick = this.handleShiftClick.bind(this);
  }

  render() {
    return (
      <>
        <EnglishQwertyKeyboard
          shiftMode={this.state.shiftMode}
          onInputClick={this.handleInputClick}
          onShiftClick={this.handleShiftClick}
          onBackspaceClick={this.props.onBackspaceClick}
        />
      </>
    );
  }

  handleInputClick(ch) {
    if (this.state.shiftMode === ShiftMode.capital) {
      this.setState({
        shiftMode: ShiftMode.normal,
      });
    }

    this.props.onInputClick?.(ch);
  }

  handleShiftClick() {
    this.setState({
      shiftMode: (this.state.shiftMode + 1) % ShiftMode.numModes,
    });
  }
}

EnglishQwertyKeyboardContainer.propTypes = {
  onInputClick: PropTypes.func,
  onBackspaceClick: PropTypes.func,
};
