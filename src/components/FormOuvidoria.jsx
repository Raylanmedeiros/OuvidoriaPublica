import { useState } from "react";

export default function FormularioOuvidoria() {
    const [tipo, setTipo] = useState("");
    const [nome, setNome] = useState("");
    const [numero, setNumero] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [anonimo, setAnonimo] = useState(false);
    const [erro, setErro] = useState("");

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
            email: anonimo ? "Anônimo" : email,
            mensagem,
        };

        console.log("Mensagem enviada:", dados);
        alert("Mensagem enviada com sucesso!");
        // Aqui você pode integrar com backend ou API

        // Limpar campos
        setTipo("");
        setNome("");
        setNumero("");
        setMensagem("");
        setAnonimo(false);
        setErro("");
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-2xl font-bold">Envie sua manifestação</h2>

            {erro && <p className="text-red-500">{erro}</p>}

            <div>
                <label className="block font-medium mb-1">Tipo de mensagem</label>
                <select
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required
                >
                    <option value="">Selecione...</option>
                    <option value="pergunta">Pergunta</option>
                    <option value="denuncia">Denúncia</option>
                    <option value="sugestao">Sugestão</option>
                </select>
            </div>

            {!anonimo && (
                <>
                    <div>
                        <label className="block font-medium mb-1">Nome*</label>
                        <input
                            type="name"
                            placeholder="Seu nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Número*</label>
                        <input
                            type="phone"
                            placeholder="(XX) XXXXX-XXXX"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>

                </>
            )}

            <div>
                <label className="block font-medium mb-1">Mensagem *</label>
                <textarea
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    rows={4}
                    required
                ></textarea>
            </div>

            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={anonimo}
                    onChange={(e) => setAnonimo(e.target.checked)}
                    className="mr-2"
                />
                <label>Enviar de forma anônima</label>
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
                Enviar
            </button>
        </form>
    );
}
