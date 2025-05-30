import { useState } from "react";

export default function FormularioOuvidoria() {
    const [tipo, setTipo] = useState("");
    const [nome, setNome] = useState("");
    const [numero, setNumero] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [anonimo, setAnonimo] = useState(false);
    const [erro, setErro] = useState("");

    const formatTel = (value) => {
        const apenasNumeros = value.replace(/\D/g, '');
        const numerosLimitados = apenasNumeros.slice(0, 11);

        if (numerosLimitados.length <= 2) {
            return numerosLimitados;
        }
        if (numerosLimitados.length <= 7) {
            return `(${numerosLimitados.slice(0, 2)}) ${numerosLimitados.slice(2)}`;
        }
        return `(${numerosLimitados.slice(0, 2)}) ${numerosLimitados.slice(2, 7)}-${numerosLimitados.slice(7, 11)}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!tipo || !mensagem.trim()) {
            setErro("Por favor, selecione um tipo e preencha a mensagem.");
            return;
        }

        const dados = {
            tipo,
            nome: anonimo ? "Anônimo" : nome,
            numero: anonimo ? "Anônimo" : numero,
            mensagem,
        };

        console.log("Mensagem enviada:", dados);
        alert("Mensagem enviada com sucesso!");

        // Limpar campos
        setTipo("");
        setNome("");
        setNumero("");
        setMensagem("");
        setAnonimo(false);
        setErro("");
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-10 bg-gray-200 rounded-lg shadow-[0_0_30px_10px_rgba(0,0,0,0.15)] space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Envie sua manifestação</h2>

            {erro && <p className="text-red-500 text-sm font-medium">{erro}</p>}

            <div className="space-y-6">
                <div>
                    <label className="block text-left text-sm font-medium text-gray-700 mb-1">Tipo de mensagem *</label>
                    <select
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="">Selecione...</option>
                        <option value="pergunta">Pergunta</option>
                        <option value="denuncia">Denúncia</option>
                        <option value="sugestao">Sugestão</option>
                    </select>
                </div>

                {!anonimo && (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-left text-sm font-medium text-gray-700 mb-1">Nome *</label>
                            <input
                                type="text"
                                placeholder="Seu nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                title="Coloque seu nome!"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-left text-sm font-medium text-gray-700 mb-1">Número *</label>
                            <input
                                type="tel"
                                placeholder="(XX) XXXXX-XXXX"
                                value={formatTel(numero)}
                                onChange={(e) => {
                                    const apenasNumeros = e.target.value.replace(/\D/g, '');
                                    setNumero(apenasNumeros);
                                }}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                                pattern="^\(\d{2}\) \d{5}-\d{4}$"
                                title="Digite 11 números (DDD + número)"
                                required
                            />
                        </div>
                    </div>
                )}

                {/* Campo Mensagem */}
                <div>
                    <label className="block text-left text-sm font-medium text-gray-700 mb-1">Mensagem *</label>
                    <textarea
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm "
                        rows={2}
                        placeholder="Descreva sua mensagem aqui..."
                        required
                    ></textarea>
                </div>

                {/* Checkbox Anônimo */}
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="anonimo"
                        checked={anonimo}
                        onChange={(e) => setAnonimo(e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="anonimo" className="ml-2 block text-sm text-gray-700">
                        Enviar de forma anônima
                    </label>
                </div>
            </div>

            <button
                type="submit"
                className="w-full flex justify-center shadow-sm  bg-red-500 text-white"
            >
                Enviar mensagem
            </button>
        </form>
    );
}