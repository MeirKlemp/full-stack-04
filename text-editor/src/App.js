import {useState} from 'react';
import EnglishQwertyKeyboardContainer from
  './containers/EnglishQwertyKeyboardContainer';

export default function App() {
  const [input, setInput] = useState('');
  return (
    <>
      <div>
        {input}
      </div>
      <EnglishQwertyKeyboardContainer
        onInputClick={ch => setInput(input + ch)}
        onBackspaceClick={() => setInput(input.slice(0, -1))}
      />
    </>
  );
}
