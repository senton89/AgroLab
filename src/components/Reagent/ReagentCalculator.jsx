// Create a new component ReagentCalculator.js
import React, { useState } from 'react';
import useReagentRepository from '../../Repository/ReagentRepository';

const ReagentCalculator = () => {
    const { reagentList } = useReagentRepository();
    const [selectedReagent, setSelectedReagent] = useState('');
    const [amount, setAmount] = useState('');
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        const reagent = reagentList.find(r => r.id === parseInt(selectedReagent));
        if (reagent && amount) {
            const amountNum = parseFloat(amount);
            if (amountNum > reagent.stock) {
                setResult({
                    sufficient: false,
                    message: `Недостаточно реактива. Доступно: ${reagent.stock}`
                });
            } else {
                setResult({
                    sufficient: true,
                    message: `Достаточно реактива. Останется: ${reagent.stock - amountNum}`
                });
            }
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Калькулятор реактивов</h2>

            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Выберите реактив</label>
                <select
                    value={selectedReagent}
                    onChange={(e) => setSelectedReagent(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                >
                    <option value="">Выберите реактив</option>
                    {reagentList.map(reagent => (
                        <option key={reagent.id} value={reagent.id}>
                            {reagent.name} (Доступно: {reagent.stock})
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Требуемое количество</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    min="0"
                    step="0.01"
                />
            </div>

            <button
                onClick={handleCalculate}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
                Рассчитать
            </button>

            {result && (
                <div className={`mt-4 p-3 rounded ${result.sufficient ? 'bg-green-100' : 'bg-red-100'}`}>
                    {result.message}
                </div>
            )}
        </div>
    );
};

export default ReagentCalculator;