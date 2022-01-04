import React, {useState} from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState<number>(0)
    const fetchButton = (operation: string) => {
        switch (operation) {
            case "+":
                setCount(count + 1);
                break;
            case "-":
                setCount(count - 1);
                break;
        }
    }
    return (
        <div className="App">
            <span id="countLabel">{count}</span>
            <button onClick={() => { fetchButton("+") }}>+</button>
            <button onClick={() => { fetchButton("-") }}>-</button>
        </div>
    );
}

export default App;
