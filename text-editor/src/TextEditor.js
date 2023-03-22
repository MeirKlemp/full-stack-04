import React from 'react';
import KeyboardContainer from './containers/KeyboardContainer';

const MAX_TEXTS = 100;

export default class TextEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      texts: [''],
      currentText: 0,
    };
  }

  render() {
    const text = this.state.texts[this.state.currentText];
    console.log(this.state);
    return (
      <>
        <pre>
          {text}
        </pre>
        <KeyboardContainer
          onInputClick={ch => this.handleTextChange(text + ch)}
          onBackspaceClick={() => this.handleTextChange(text.slice(0, -1))}
          onClearClick={() => this.handleTextChange('')}
          onEnterClick={() => this.handleTextChange(text + '\n')}
          onUndoClick={() =>
            this.setState({currentText: this.state.currentText - 1})}
          onRedoClick={() =>
            this.setState({currentText: this.state.currentText + 1})}
          undoEnabled={this.state.currentText > 0}
          redoEnabled={this.state.currentText < this.state.texts.length - 1}
        />
      </>
    );
  }

  handleTextChange(newText) {
    if (newText === this.state.texts[this.state.currentText]) {
      return;
    }

    const deletedTexts = Math.max(0, this.state.currentText + 2 - MAX_TEXTS);
    const newTexts = [
      ...this.state.texts.slice(deletedTexts, this.state.currentText + 1),
      newText
    ];
    this.setState({
      texts: newTexts,
      currentText: this.state.currentText + 1 - deletedTexts,
    });
  }
}
