import {useState} from 'react';
import KeyboardContainer from './containers/KeyboardContainer';

export default function App() {
  const [input, setInput] = useState('');
  return (
    <>
      <textarea defaultValue={input} readOnly={true}>
      </textarea>
      <KeyboardContainer
        onInputClick={ch => setInput(input + ch)}
        onBackspaceClick={() => setInput(input.slice(0, -1))}
        onEnterClick={() => setInput(input + '\n')}
      />
    </>
  );
}
