/*
useCallback is a React Hook that caches a function so React doesn't create a new copy on every re-render.

It helps improve performance in some cases.
It is mainly used when passing functions to child components or when a stable function reference is needed.
It only recreates the function if one of its dependencies changes. */

// onChange is a React event that runs whenever the value of an input changes similar to addEventListener in JS.

/*
useEffect is a React Hook used to perform side effects after a component renders.
It runs when the component mounts or whenever its dependencies change.
It is commonly used for API calls, timers, event listeners, and DOM updates.
It synchronizes your component with external systems or state changes.
Syntax: useEffect(() => { code }, [dependencies]);
*/

/*
useRef is a React Hook that creates a mutable reference that persists across re-renders.
It is commonly used to access DOM elements or store values without causing a re-render.
Updating a ref does not re-render the component.
Syntax: const ref = useRef(initialValue);
*/

import { useState, useCallback, useEffect, useRef } from 'react';
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "/*-+@#$&/'[],.!^()-=+_";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassWordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,password.length);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  
  // userRef Hook
  const passwordRef = useRef(null);
return (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-4">
    <div className="w-full max-w-lg bg-gray-800 rounded-2xl shadow-2xl p-8">
      <h1 className="text-3xl font-bold text-center text-orange-400 mb-8">
        🔐 Password Generator
      </h1>

      <div className="flex rounded-xl overflow-hidden shadow-lg mb-8">
        <input
          type="text"
          value={password}
          className="w-full px-4 py-3 outline-none text-gray-800 bg-white text-lg"
          placeholder="Your Password"
          ref={passwordRef}
          readOnly
        />

        <button onClick={copyPassWordToClipboard}
          className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white px-5 font-medium cursor-pointer">
          Copy
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-white font-medium">Password Length</label>

            <span className="text-orange-400 font-bold">{length}</span>
          </div>

          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="w-full cursor-pointer accent-orange-500"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center">
          <label
            htmlFor="numberInput"
            className="text-white font-medium cursor-pointer"
          >
            Include Numbers
          </label>

          <input
            id="numberInput"
            type="checkbox"
            defaultChecked={numberAllowed}
            className="w-5 h-5 accent-orange-500 cursor-pointer"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
        </div>

        <div className="flex justify-between items-center">
          <label
            htmlFor="characterInput"
            className="text-white font-medium cursor-pointer"
          >
            Include Symbols
          </label>

          <input
            id="characterInput"
            type="checkbox"
            defaultChecked={charAllowed}
            className="w-5 h-5 accent-orange-500 cursor-pointer"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  </div>
);
}

export default App
