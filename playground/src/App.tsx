import React from 'react';
import './App.css';
import UseUpdateEffectDemo from './components/UseUpdateEffectDemo';
import UseClickOutsideDemo from './components/UseClickOutsideDemo';

function App() {
  return (
    <div className="App">
      <div className="playground-header">
        <h1>🧪 Neural Sandbox - Hooks Playground</h1>
        <p>Espacio para probar y experimentar con hooks personalizados</p>
      </div>
      
      <UseUpdateEffectDemo />
      <UseClickOutsideDemo />
      
      {/* Agregar más demos de hooks */}
    </div>
  );
}

export default App;
