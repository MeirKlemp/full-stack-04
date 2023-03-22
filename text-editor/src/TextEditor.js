import React from 'react';
import TextDisplayer from './components/TextDisplayer';
import KeyboardContainer from './containers/KeyboardContainer';
import Text from './models/Text';

const MAX_TEXTS = 100;

export default class TextEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      texts: [new Text('', {color: 'black'})],
      currentText: 0,
    };
  }

  render() {
    const text = this.state.texts[this.state.currentText];
    console.log(this.state);
    return (
      <>
        <TextDisplayer text={text} />
        color: <input type="text"
          value={text.style.color}
          onChange={e => this.handleStyleChange({color: e.target.value})}
        />
        <KeyboardContainer
          onInputClick={ch => this.handleTextChange(text.append(ch))}
          onBackspaceClick={() => this.handleTextChange(text.slice(0, -1))}
          onClearClick={() => this.handleTextChange(text.cleared)}
          onEnterClick={() => this.handleTextChange(text.append('\n'))}
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
    const currentText = this.state.currentText;
    const texts = this.state.texts

    if (newText.toString() === texts[currentText].toString()) {
      return;
    }

    const deletedTexts = Math.max(0, currentText + 2 - MAX_TEXTS);
    const newTexts = [
      ...texts.slice(deletedTexts, currentText + 1),
      newText
    ];
    this.setState({
      texts: newTexts,
      currentText: currentText + 1 - deletedTexts,
    });
  }

  handleStyleChange(newStyle) {
    const currentText = this.state.currentText;
    const texts = this.state.texts
    const newTexts = [
      ...texts.slice(0, currentText),
      texts[currentText].changeStyle(newStyle),
      ...texts.slice(currentText + 1),
    ];
    this.setState({
      texts: newTexts,
    });
  }
}

