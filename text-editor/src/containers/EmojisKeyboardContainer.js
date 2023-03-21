import React from 'react';
import PropTypes from 'prop-types';
import EmojisKeyboard from '../components/EmojisKeyboard';

export default class EmojisKeyboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableNum: 0,
    };

    this.handleSlide = this.handleSlide.bind(this);
  }

  render() {
    return (
      <>
        <EmojisKeyboard
          tableNum={this.state.tableNum}
          onInputClick={this.props.onInputClick}
          onSlide={this.handleSlide}
        />
      </>
    );
  }

  handleSlide(slideLeft) {
    const tableNum = this.state.tableNum;
    this.setState({
      tableNum: slideLeft ? tableNum - 1 : tableNum + 1,
    });
  }
}

EmojisKeyboardContainer.propTypes = {
  onInputClick: PropTypes.func,
};
