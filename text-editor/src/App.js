import {useState} from 'react';
import KeyboardContainer from './containers/KeyboardContainer';

const MAX_TEXTS = 100;

export default function App() {
  const [texts, setTexts] = useState(['']);
  const [currentText, setCurrentText] = useState(0);

  const handleTextChange = (newText) => {
    const deletedTexts = Math.max(0, currentText + 2 - MAX_TEXTS);
    const newTexts = [...texts.slice(deletedTexts, currentText + 1), newText];
    setTexts(newTexts);
    setCurrentText(currentText + 1 - deletedTexts);
  }

  return (
    <>
      <pre>
        {texts[currentText]}
      </pre>
      <KeyboardContainer
        onInputClick={ch => handleTextChange(texts[currentText] + ch)}
        onBackspaceClick={() => handleTextChange(
                                  texts[currentText].slice(0, -1))}
        onClearClick={() => handleTextChange('')}
        onEnterClick={() => handleTextChange(texts[currentText] + '\n')}
        onUndoClick={() => setCurrentText(currentText - 1)}
        onRedoClick={() => setCurrentText(currentText + 1)}
        undoEnabled={currentText > 0}
        redoEnabled={currentText < texts.length - 1}
      />
    </>
  );
}
