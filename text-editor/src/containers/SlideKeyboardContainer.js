import React from 'react';
import PropTypes from 'prop-types';
import SlideKeyboard from '../components/keyboards/SlideKeyboard';

export default class SlideKeyboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.rows = parseInt(this.props.rows);
    this.columns = parseInt(this.props.columns);
    this.numCharsPerKeyboard = this.rows * this.columns - 2;
    this.numTables =
      Math.ceil(this.props.chars.length / this.numCharsPerKeyboard);
    this.state = {
      tableNum: 0,
    };

    this.handleSlide = this.handleSlide.bind(this);
  }

  render() {
    const currentChars = this.props.chars.slice(
      this.numCharsPerKeyboard * this.state.tableNum,
      this.numCharsPerKeyboard * (this.state.tableNum + 1)
    );
    return (
      <>
        <SlideKeyboard
          chars={currentChars}
          rows={this.rows}
          columns={this.columns}
          onInputClick={this.props.onInputClick}
          onSlide={this.handleSlide}
          canSlideLeft={this.state.tableNum > 0}
          canSlideRight={this.state.tableNum < this.numTables - 1}
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

SlideKeyboardContainer.propTypes = {
  chars: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
  onInputClick: PropTypes.func,
};
