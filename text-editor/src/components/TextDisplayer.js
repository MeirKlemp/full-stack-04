import React from 'react';
import PropTypes from 'prop-types';
import Text from '../models/Text';

export default function TextDisplayer({ text }) {
  const spans = text.lines.map(
    (line, i) => [
      ...line.map((ts, j) =>
        <span key={`${i},${j}`} style={ts.style}>
          {ts.text}
        </span>),
      <br key={i}/>
    ]
  );
  return (
    <div>
      {spans}
    </div>
  );
}

TextDisplayer.propTypes = {
  text: PropTypes.instanceOf(Text).isRequired,
};
