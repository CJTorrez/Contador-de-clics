import { useState } from "react";
import type { EstadoContador } from "../types/Contador";

const useContador = (): EstadoContador => {
    const [contador, setContador] = useState<number>(0);

    const incremento = (): void => setContador(prev => prev + 1);
    const decremento = (): void => setContador(prev => Math.max(0, prev - 1));
    const reinicio = (): void => setContador(0);

    return {
        contador,
        incremento,
        decremento,
        reinicio,
    };
};

export default useContador;
