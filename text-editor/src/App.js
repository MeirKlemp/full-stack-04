import Key from './components/Key';

export default function App() {
    return <><Key onClick={() => alert("Clicked on A")}>A</Key><Key>B</Key></>;
}
