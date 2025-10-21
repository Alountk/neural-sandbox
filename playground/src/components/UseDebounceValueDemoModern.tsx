import { useDebounceValue } from "../hooks/hooks";
import React, { useState } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";

const UseDebounceValueDemoModern: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounceValue(inputValue, 500);

  return (
    <></>
    // <Card className="w-full max-w-4xl mx-auto">
    //   <CardHeader>
    //     <CardTitle className="flex items-center gap-2">
    //       🚀 useDebounceValue Demo
    //       <Badge variant="secondary">Modern UI</Badge>
    //     </CardTitle>
    //     <CardDescription>
    //       <code className="bg-muted px-2 py-1 rounded text-sm">useDebounceValue</code> 
    //       {" "}optimiza el rendimiento al retrasar las actualizaciones de estado hasta que el usuario 
    //       deje de escribir por un tiempo determinado.
    //     </CardDescription>
    //   </CardHeader>
      
    //   <CardContent className="space-y-6">
    //     <div className="space-y-2">
    //       <label htmlFor="demo-input" className="text-sm font-medium">
    //         Escribe algo (debounce: 500ms)
    //       </label>
    //       <Input
    //         id="demo-input"
    //         type="text"
    //         value={inputValue}
    //         onChange={(e) => setInputValue(e.target.value)}
    //         placeholder="Escribe para ver el efecto del debounce..."
    //         className="w-full"
    //       />
    //     </div>

    //     <Card className="bg-muted/50">
    //       <CardContent className="pt-6">
    //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //           <div className="space-y-2">
    //             <div className="text-sm font-medium text-muted-foreground">
    //               Valor Actual (inmediato)
    //             </div>
    //             <div className="p-3 bg-background rounded-md border">
    //               <code className="text-sm">
    //                 {inputValue || <span className="text-muted-foreground">vacío</span>}
    //               </code>
    //             </div>
    //           </div>
              
    //           <div className="space-y-2">
    //             <div className="text-sm font-medium text-muted-foreground">
    //               Valor Debounced (500ms delay)
    //             </div>
    //             <div className="p-3 bg-background rounded-md border">
    //               <code className="text-sm">
    //                 {debouncedValue || <span className="text-muted-foreground">vacío</span>}
    //               </code>
    //             </div>
    //           </div>
    //         </div>
    //       </CardContent>
    //     </Card>

    //     <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/50">
    //       <CardContent className="pt-6">
    //         <div className="flex items-start gap-3">
    //           <div className="text-blue-600 dark:text-blue-400 text-lg">💡</div>
    //           <div className="space-y-2">
    //             <h4 className="font-medium text-blue-900 dark:text-blue-100">
    //               Casos de uso prácticos:
    //             </h4>
    //             <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
    //               <li>• Búsquedas en tiempo real (evita consultas excesivas)</li>
    //               <li>• Validación de formularios (espera a que termine de escribir)</li>
    //               <li>• Auto-guardado de documentos</li>
    //               <li>• Filtros dinámicos en listas grandes</li>
    //             </ul>
    //           </div>
    //         </div>
    //       </CardContent>
    //     </Card>
    //   </CardContent>
    // </Card>
  );
};

export default UseDebounceValueDemoModern;