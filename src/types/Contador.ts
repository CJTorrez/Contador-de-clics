export interface EstadoContador {
    contador: number;
    incremento: () => void;
    decremento: () => void;
    reinicio: () => void;
}
