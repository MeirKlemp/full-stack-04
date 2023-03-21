import {useState} from 'react';
import EnglishQwertyKeyboardContainer from
  './containers/EnglishQwertyKeyboardContainer';
import ControlKeyboard from './components/ControlKeyboard';

const KEYBOARDS = ["EN", "HE", "01"]

export default function App() {
  const [input, setInput] = useState('');
  const [keyboard, setKeyboard] = useState(KEYBOARDS[0]);
  const handleChangeKeyboard = (kb) => {
    let index = KEYBOARDS.indexOf(kb);
    if (index === -1) index = 0;
    setKeyboard(KEYBOARDS[index]);
  };
  return (
    <>
      <textarea defaultValue={input} readOnly={true}>
      </textarea>
      <div style={{display: "flex"}}>
        { keyboard === "EN" &&
          <EnglishQwertyKeyboardContainer
            onInputClick={ch => setInput(input + ch)}
          />
        }
        <ControlKeyboard
          selectedKeyboard={keyboard}
          keyboards={KEYBOARDS}
                onBackspaceClick={() => setInput(input.slice(0, -1))}
                onEnterClick={() => setInput(input + '\n')}
          onChangeKeyboard={handleChangeKeyboard}
        />
      </div>
    </>
  );
}
