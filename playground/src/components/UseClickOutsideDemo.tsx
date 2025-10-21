import { useClickOutside } from "../hooks/hooks";
import React from "react";

const UseClickOutsideDemo: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClickOutside = React.useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen, setIsOpen]);

  const ref = useClickOutside<HTMLDivElement>(handleClickOutside);
  return (
    <div className="hook-demo">
      <h2>useClickOutside Demo</h2>
      <p>
        <code>useClickOutside</code> es un hook que te permite detectar clics fuera de un elemento.
        Es útil para cerrar menús o modales cuando el usuario hace clic fuera de ellos.
      </p>

      <div className="demo-controls">
          <button
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-controls="demo-menu"
          >
            Open Menu
          </button>
          {isOpen && (
            <div
              id="demo-menu"
              role="menu"
              ref={ref}
              style={{
                position: "absolute",
                top: "100px",
                left: "50px",
                width: "200px",
                height: "150px",
                backgroundColor: "lightgray",
                border: "1px solid black",
                padding: "10px",
              }}
            >
              <p>Este menú es un menú desplegable. Haz clic fuera para cerrarlo.</p>
            </div>
          )}
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
            <code>useClickOutside</code> detecta clics fuera del área referenciada
          </li>
          <li>
            <code>useClickOutside</code> se utiliza para cerrar menús o modales
            al hacer clic fuera de ellos
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UseClickOutsideDemo;
