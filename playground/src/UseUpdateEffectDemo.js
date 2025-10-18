import React, { useState, useEffect } from 'react';
import { useUpdateEffect } from './hooks';

const UseUpdateEffectDemo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [logs, setLogs] = useState([]);

  // useEffect normal - se ejecuta en el primer render Y en cada actualización
  useEffect(() => {
    setLogs(prev => [...prev, `useEffect: count=${count}, name='${name}'`]);
  }, [count, name]);

  // useUpdateEffect - NO se ejecuta en el primer render, solo en actualizaciones
  useUpdateEffect(() => {
    setLogs(prev => [...prev, `useUpdateEffect: count=${count}, name='${name}'`]);
  }, [count, name]);

  const clearLogs = () => setLogs([]);

  return (
    <div className="hook-demo">
      <h2>useUpdateEffect Demo</h2>
      <p>
        <code>useUpdateEffect</code> es como <code>useEffect</code>, pero se salta la primera ejecución.
        Es útil cuando quieres que un efecto solo se ejecute en las actualizaciones, no en el montaje inicial.
      </p>
      
      <div className="demo-controls">
        <button onClick={() => setCount(c => c + 1)}>
          Incrementar Count ({count})
        </button>
        
        <input
          type="text"
          placeholder="Escribe algo..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <button onClick={clearLogs}>
          Limpiar Logs
        </button>
      </div>

      <div className="demo-output">
        <pre>
          <strong>Logs de ejecución:</strong>
          {logs.length === 0 ? '\nNo hay logs aún. Interactúa con los controles arriba.' : ''}
          {logs.map((log, index) => (
            `\n${index + 1}. ${log}`
          )).join('')}
        </pre>
      </div>

      <div style={{ marginTop: '20px', padding: '10px', background: '#e7f3ff', borderRadius: '4px' }}>
        <strong>💡 Observa:</strong>
        <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
          <li><code>useEffect</code> se ejecuta inmediatamente al cargar el componente</li>
          <li><code>useUpdateEffect</code> NO se ejecuta al cargar, solo cuando cambias count o name</li>
        </ul>
      </div>
    </div>
  );
};

export default UseUpdateEffectDemo;