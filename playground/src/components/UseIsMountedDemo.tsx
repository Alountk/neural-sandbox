import { useIsMounted } from "../hooks/useIsMounted";
import React, { useState, useEffect } from "react";

const UseIsMountedDemo: React.FC = () => {
  const isMountedRef = useIsMounted();
  const [count, setCount] = useState<number>(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [showChild, setShowChild] = useState<boolean>(true);

  // Simular operación asíncrona que podría ejecutarse después del desmontaje
  const simulateAsyncOperation = (): void => {
    setTimeout(() => {
      if (isMountedRef.current) {
        setCount(prev => prev + 1);
        setLogs(prev => [...prev, `✅ Operación async ejecutada - componente montado: ${isMountedRef.current}`]);
      } else {
        setLogs(prev => [...prev, `❌ Operación async cancelada - componente desmontado`]);
      }
    }, 2000);
  };

  const clearLogs = (): void => setLogs([]);

  return (
    <div className="hook-demo">
      <h2>useIsMounted Demo</h2>
      <p>
        <code>useIsMounted</code> es un hook que te permite verificar si un componente está montado.
        Es útil para prevenir actualizaciones de estado en componentes desmontados, evitando warnings de React.
      </p>

      <div className="demo-controls">
        <button onClick={simulateAsyncOperation}>
          Simular Operación Asíncrona (2s delay)
        </button>
        
        <button onClick={() => setShowChild(!showChild)}>
          {showChild ? 'Desmontar' : 'Montar'} Componente Hijo
        </button>
        
        <button onClick={clearLogs}>
          Limpiar Logs
        </button>
      </div>

      <div className="demo-output">
        <pre>
          <strong>Estado actual:</strong>
          {`\nComponente montado: ${isMountedRef.current}`}
          {`\nCount: ${count}`}
          
          <strong>Logs de operaciones:</strong>
          {logs.length === 0 ? '\nNo hay logs aún. Prueba las operaciones arriba.' : ''}
          {logs.map((log: string, index: number) => (
            `\n${index + 1}. ${log}`
          )).join('')}
        </pre>
      </div>

      {showChild && <ChildComponent />}

      <div style={{ marginTop: "20px", padding: "10px", background: "#e7f3ff", borderRadius: "4px" }}>
        <strong>💡 Observa:</strong>
        <ul style={{ margin: "10px 0", paddingLeft: "20px" }}>
          <li>
            <code>useIsMounted</code> devuelve un ref que indica si el componente está montado
          </li>
          <li>
            Previene warnings de "Can't perform a React state update on an unmounted component"
          </li>
          <li>
            Útil en operaciones asíncronas como fetch, setTimeout, etc.
          </li>
        </ul>
      </div>
    </div>
  );
};

// Componente hijo para demostrar montaje/desmontaje
const ChildComponent: React.FC = () => {
  const isMountedRef = useIsMounted();
  const [childCount, setChildCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMountedRef.current) {
        setChildCount(prev => prev + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isMountedRef]);

  return (
    <div style={{ 
      margin: "20px 0", 
      padding: "15px", 
      background: "#f0f8ff", 
      border: "2px solid #b0d4f1", 
      borderRadius: "4px" 
    }}>
      <h3>Componente Hijo</h3>
      <p>Este componente se monta/desmonta para demostrar useIsMounted</p>
      <p><strong>Contador interno:</strong> {childCount}</p>
      <p><strong>Está montado:</strong> {isMountedRef.current ? '✅ Sí' : '❌ No'}</p>
    </div>
  );
};

export default UseIsMountedDemo;
