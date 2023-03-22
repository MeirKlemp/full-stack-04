import React from 'react';
import PropTypes from 'prop-types';
import Text from '../models/Text';

export default function TextDisplayer({ text }) {
  // TODO: Move this complication into Text.
  const spans = text.sections.flatMap((section, i) =>
    section.text.split('\n').map((t, j, arr) =>
      <React.Fragment key={`${i},${j}`} >
        <span style={section.style}>{t}</span>
        {(j < arr.length - 1 || t === '') && <br/>}
      </React.Fragment>
  ));
  return (
    <div>
      {spans}
    </div>
  );
}

TextDisplayer.propTypes = {
  text: PropTypes.instanceOf(Text).isRequired,
};
