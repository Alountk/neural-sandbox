import { useDebounceValue } from "../hooks/hooks";
import React, { useState } from "react";

const UseDebounceValueDemo: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounceValue(inputValue, 500);

  return (
    <div className="hook-demo">
      <h2>useDebounceValue Demo</h2>
      <p>
        <code>useDebounceValue</code> es un hook que te permite retrasar el
        valor de entrada de un componente. Es útil para optimizar el rendimiento
        al evitar actualizaciones de estado innecesarias.
      </p>

      <div className="demo-controls">
        <label
          htmlFor="debounce-input"
          style={{ display: "block", marginBottom: "4px" }}
        >
          Valor de entrada:
        </label>
        <input
          id="debounce-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="demo-output">
        <pre>
          <strong>Valor Actual:</strong> {inputValue}
          <br />
          <strong>Valor Debounced (500ms):</strong> {debouncedValue}
        </pre>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          background: "#e7f3ff",
          borderRadius: "4px",
        }}
      >
        <strong>💡 Observa:</strong>
        <ul style={{ margin: "10px 0", paddingLeft: "20px" }}>
          <li>
            El valor mostrado debajo de "Valor Debounced" solo se actualiza después de 500ms sin cambios en el input.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UseDebounceValueDemo;
