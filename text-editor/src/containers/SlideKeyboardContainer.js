import React from 'react';
import PropTypes from 'prop-types';
import SlideKeyboard from '../components/keyboards/SlideKeyboard';

export default class SlideKeyboardContainer extends React.Component {
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
        <SlideKeyboard
          table={this.props.tables[this.state.tableNum]}
          onInputClick={this.props.onInputClick}
          onSlide={this.handleSlide}
          canSlideLeft={this.state.tableNum > 0}
          canSlideRight={this.state.tableNum < this.props.tables.length - 1}
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
  tables: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.string
  ))).isRequired,
  onInputClick: PropTypes.func,
};
