// MockReagentService.js
let reagents = [
    { id: 1, name: 'Реагент A', date: '2023-01-01', batch: 'Batch001', supplier: 'Supplier A', expiryDate: '2024-01-01', stock: 100 },
    { id: 2, name: 'Реагент B', date: '2023-02-01', batch: 'Batch002', supplier: 'Supplier B', expiryDate: '2024-02-01', stock: 200 },
];

const MockReagentService = {
    fetchReagents: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(reagents);
            }, 1000);
        });
    },
    addReagent: async (reagent) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                reagent.id = reagents.length + 1; // Присваиваем новый ID
                reagents.push(reagent);
                resolve();
            }, 1000);
        });
    },

    updateReagent: async (id, updatedReagent) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const index = reagents.findIndex(reagent => reagent.id === id);
                if (index !== -1) {
                    reagents[index] = { ...reagents[index], ...updatedReagent };
                    resolve(reagents[index]);
                } else {
                    reject(new Error('Reagent not found'));
                }
            }, 1000);
        });
    },

    deleteReagent: async (id) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const index = reagents.findIndex(reagent => reagent.id === id);
                if (index !== -1) {
                    reagents.splice(index, 1);
                    resolve({ success: true });
                } else {
                    resolve({ success: false, error: 'Reagent not found' });
                }
            }, 500);
        });
    }
};
export default MockReagentService;