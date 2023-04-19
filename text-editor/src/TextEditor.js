import React from 'react';
import TextDisplayer from './components/TextDisplayer';
import KeyboardContainer from './containers/KeyboardContainer';
import TextDesignToolbar from './components/TextDesignToolbar';
import Text from './models/Text';

const MAX_TEXTS = 100;

export default class TextEditor extends React.Component {
  constructor(props) {
    super(props);

    const style = {
      color: 'black',
      fontSize: 11,
      fontFamily: "arial",
    };

    this.state = {
      texts: [new Text(style)],
      currentText: 0,
    };
  }

  render() {
    const text = this.state.texts[this.state.currentText];
    console.log(this.state);
    const objects = this.objects;
    console.log(objects);
    console.log(objects.length);
    return (
      <>
        <TextDisplayer text={text} />
        <TextDesignToolbar
          style={text.style}
          onChange={style => this.handleStyleChange(style)}
        />
        <KeyboardContainer
          onInputClick={ch => this.handleTextChange(text.append(ch))}
          onBackspaceClick={() => this.handleTextChange(text.slice(0, -1))}
          onClearClick={() => this.handleTextChange(text.cleared)}
          onEnterClick={() => this.handleTextChange(text.append('\n'))}
          onUpperClick={() => this.handleTextChange(text.mapChars(ch => ch.toUpperCase()))}
          onLowerClick={() => this.handleTextChange(text.mapChars(ch => ch.toLowerCase()))}
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
      texts[currentText].withStyle(newStyle),
      ...texts.slice(currentText + 1),
    ];
    this.setState({
      texts: newTexts,
    });
  }

  get objects() {
    // Debug
    const result = [];
    const push = (obj) => {
      if (result.indexOf(obj) === -1) {
        result.push(obj);
      }
    };
    for (const text of this.state.texts) {
      push(text.lines);
      for (const line of text.lines) {
        push(line);
        for (const section of line) {
          push(section);
          push(section.text);
          push(section.style);
        }
      }
    }
    return result;
  }
}

