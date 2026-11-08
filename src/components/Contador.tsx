import useContador from "../hooks/useContador";

export const Contador = () => {
    const {
        contador,
        incremento,
        decremento,
        reinicio,
    } = useContador();

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10 text-slate-100">
            <section
                aria-labelledby="titulo"
                className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8"
            >
                <header>
                    <h1 id="titulo" className="text-3xl font-bold text-teal-300">
                        Contador de clics
                    </h1>
                </header>

                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 px-4 py-6 text-center">
                    <p className="text-sm font-medium text-slate-300">Clics registrados</p>
                    <output aria-label="Clics registrados" className="mt-2 block text-6xl font-bold tabular-nums">
                        {contador}
                    </output>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                    <button
                        type="button"
                        onClick={decremento}
                        disabled={contador === 0}
                        className="rounded-xl border border-slate-600 px-3 py-3 text-sm font-semibold hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        − Disminuir
                    </button>
                    <button
                        type="button"
                        onClick={incremento}
                        className="rounded-xl bg-teal-300 px-3 py-3 text-sm font-bold text-slate-950 hover:bg-teal-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
                    >
                        + Aumentar
                    </button>
                    <button
                        type="button"
                        onClick={reinicio}
                        disabled={contador === 0}
                        className="col-span-2 rounded-xl px-3 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        Reiniciar
                    </button>
                </div>
            </section>
        </main>
    );
};
