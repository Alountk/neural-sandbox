import React from 'react';
// import './App.css';
import UseUpdateEffectDemo from './components/UseUpdateEffectDemo';
import UseClickOutsideDemo from './components/UseClickOutsideDemo';
import UseIsMountedDemo from './components/UseIsMountedDemo';
import UseDebounceValueDemo from './components/UseDebounceValueDemo';

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-foreground">
            🧪 Neural Sandbox - Hooks Playground
          </h1>
          <p className="text-muted-foreground text-lg">
            Espacio para probar y experimentar con hooks personalizados
          </p>
        </div>
        
        <div className="space-y-8">
          <UseUpdateEffectDemo />
          <UseClickOutsideDemo />
          <UseIsMountedDemo />
          <UseDebounceValueDemo />
        </div>
        
        {/* Agregar más demos de hooks */}
      </div>
    </div>
  );
}

export default App;
