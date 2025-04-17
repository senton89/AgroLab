// MockReagentService.js
let reagents = [
    { id: 1, name: 'Реагент A', date: '2023-01-01', batch: 'Batch001', supplier: 'Supplier A', expiryDate: '2024-01-01', stock: 100 },
    { id: 2, name: 'Реагент B', date: '2023-02-01', batch: 'Batch002', supplier: 'Supplier B', expiryDate: '2024-02-01', stock: 200 },
    { id: 3, name: 'Хлорид натрия', date: '2023-02-15', batch: 'NaCl-123', supplier: 'ХимПром', expiryDate: '2025-02-15', stock: 500 },
    { id: 4, name: 'Гидроксид калия', date: '2023-03-10', batch: 'KOH-456', supplier: 'РеактивМаркет', expiryDate: '2024-09-10', stock: 150 },
    { id: 5, name: 'Серная кислота', date: '2023-01-20', batch: 'H2SO4-789', supplier: 'КислотыПлюс', expiryDate: '2026-01-20', stock: 75 },
    { id: 6, name: 'Этанол 96%', date: '2023-04-05', batch: 'ETH-2023', supplier: 'СпиртХим', expiryDate: '2025-04-05', stock: 300 },
    { id: 7, name: 'Метиловый оранжевый', date: '2023-03-22', batch: 'IND-001', supplier: 'ИндикаторПром', expiryDate: '2024-03-22', stock: 50 },
    { id: 8, name: 'Фенолфталеин', date: '2023-05-12', batch: 'IND-002', supplier: 'ИндикаторПром', expiryDate: '2025-05-12', stock: 45 },
    { id: 9, name: 'Ацетон', date: '2023-02-28', batch: 'ACT-333', supplier: 'РастворительХим', expiryDate: '2024-08-28', stock: 250 },
    { id: 10, name: 'Глицерин', date: '2023-06-01', batch: 'GLY-777', supplier: 'ОрганикаПлюс', expiryDate: '2026-06-01', stock: 180 },
    { id: 11, name: 'Перекись водорода 3%', date: '2023-04-15', batch: 'H2O2-111', supplier: 'МедХим', expiryDate: '2024-04-15', stock: 120 },
    { id: 12, name: 'Йод кристаллический', date: '2023-05-20', batch: 'I2-222', supplier: 'РеактивМаркет', expiryDate: '2025-11-20', stock: 30 },
    { id: 13, name: 'Хлороформ', date: '2023-03-05', batch: 'CHL-555', supplier: 'РастворительХим', expiryDate: '2024-09-05', stock: 85 },
    { id: 14, name: 'Формалин 40%', date: '2023-01-10', batch: 'FOR-666', supplier: 'МедХим', expiryDate: '2025-01-10', stock: 60 },
    { id: 15, name: 'Аммиак водный', date: '2023-06-15', batch: 'AMM-888', supplier: 'ХимПром', expiryDate: '2024-12-15', stock: 110 },
    { id: 16, name: 'Бензол', date: '2023-02-10', batch: 'BNZ-999', supplier: 'РастворительХим', expiryDate: '2025-02-10', stock: 70 },
    { id: 17, name: 'Гексан', date: '2023-04-25', batch: 'HEX-101', supplier: 'ОрганикаПлюс', expiryDate: '2026-04-25', stock: 90 },
    { id: 18, name: 'Диметилсульфоксид', date: '2023-05-05', batch: 'DMSO-202', supplier: 'ОрганикаПлюс', expiryDate: '2025-05-05', stock: 65 },
    { id: 19, name: 'Нитрат серебра', date: '2023-03-15', batch: 'AgNO3-303', supplier: 'РеактивМаркет', expiryDate: '2026-03-15', stock: 25 },
    { id: 20, name: 'Сульфат меди', date: '2023-01-25', batch: 'CuSO4-404', supplier: 'ХимПром', expiryDate: '2025-01-25', stock: 150 },
    { id: 21, name: 'Гидроксид натрия', date: '2023-06-10', batch: 'NaOH-505', supplier: 'РеактивМаркет', expiryDate: '2025-06-10', stock: 200 },
    { id: 22, name: 'Соляная кислота', date: '2023-04-20', batch: 'HCl-606', supplier: 'КислотыПлюс', expiryDate: '2025-04-20', stock: 175 },
    { id: 23, name: 'Азотная кислота', date: '2023-02-05', batch: 'HNO3-707', supplier: 'КислотыПлюс', expiryDate: '2024-08-05', stock: 80 },
    { id: 24, name: 'Уксусная кислота', date: '2023-05-25', batch: 'CH3COOH-808', supplier: 'КислотыПлюс', expiryDate: '2025-05-25', stock: 120 },
    { id: 25, name: 'Метанол', date: '2023-03-30', batch: 'MET-909', supplier: 'СпиртХим', expiryDate: '2024-09-30', stock: 95 },
    { id: 26, name: 'Изопропанол', date: '2023-01-15', batch: 'IPA-010', supplier: 'СпиртХим', expiryDate: '2025-01-15', stock: 130 },
    { id: 27, name: 'Бромтимоловый синий', date: '2023-06-20', batch: 'IND-011', supplier: 'ИндикаторПром', expiryDate: '2024-12-20', stock: 40 },
    { id: 28, name: 'Лакмус', date: '2023-04-10', batch: 'IND-012', supplier: 'ИндикаторПром', expiryDate: '2025-04-10', stock: 55 },
    { id: 29, name: 'Толуол', date: '2023-02-20', batch: 'TOL-013', supplier: 'РастворительХим', expiryDate: '2025-02-20', stock: 75 },
    { id: 30, name: 'Диэтиловый эфир', date: '2023-05-15', batch: 'ETH-014', supplier: 'ОрганикаПлюс', expiryDate: '2024-05-15', stock: 60 },
    { id: 31, name: 'Хлорид кальция', date: '2023-03-25', batch: 'CaCl2-015', supplier: 'ХимПром', expiryDate: '2026-03-25', stock: 220 },
    { id: 32, name: 'Сульфат натрия', date: '2023-01-05', batch: 'Na2SO4-016', supplier: 'ХимПром', expiryDate: '2025-01-05', stock: 250 },
    { id: 33, name: 'Карбонат натрия', date: '2023-06-05', batch: 'Na2CO3-017', supplier: 'РеактивМаркет', expiryDate: '2026-06-05', stock: 180 },
    { id: 34, name: 'Фосфорная кислота', date: '2023-04-30', batch: 'H3PO4-018', supplier: 'КислотыПлюс', expiryDate: '2025-04-30', stock: 90 },
    { id: 35, name: 'Бутанол', date: '2023-02-25', batch: 'BUT-019', supplier: 'СпиртХим', expiryDate: '2025-02-25', stock: 110 },
    { id: 36, name: 'Индиго кармин', date: '2023-05-30', batch: 'IND-020', supplier: 'ИндикаторПром', expiryDate: '2024-11-30', stock: 35 },
    { id: 37, name: 'Ксилол', date: '2023-03-20', batch: 'XYL-021', supplier: 'РастворительХим', expiryDate: '2025-03-20', stock: 85 },
    { id: 38, name: 'Глюкоза', date: '2023-01-30', batch: 'GLU-022', supplier: 'БиоХим', expiryDate: '2025-01-30', stock: 150 },
    { id: 39, name: 'Сахароза', date: '2023-06-25', batch: 'SUC-023', supplier: 'БиоХим', expiryDate: '2025-06-25', stock: 140 },
    { id: 40, name: 'Крахмал', date: '2023-04-01', batch: 'STA-024', supplier: 'БиоХим', expiryDate: '2026-04-01', stock: 100 },
    { id: 41, name: 'Хлорид магния', date: '2023-02-15', batch: 'MgCl2-025', supplier: 'ХимПром', expiryDate: '2025-02-15', stock: 170 },
    { id: 42, name: 'Нитрат калия', date: '2023-05-10', batch: 'KNO3-026', supplier: 'РеактивМаркет', expiryDate: '2026-05-10', stock: 190 },
    { id: 43, name: 'Борная кислота', date: '2023-03-10', batch: 'H3BO3-027', supplier: 'КислотыПлюс', expiryDate: '2025-03-10', stock: 80 },
    { id: 44, name: 'Пропанол', date: '2023-01-20', batch: 'PRO-028', supplier: 'СпиртХим', expiryDate: '2024-07-20', stock: 120 },
    { id: 45, name: 'Метиленовый синий', date: '2023-06-30', batch: 'IND-029', supplier: 'ИндикаторПром', expiryDate: '2025-06-30', stock: 45 },
    { id: 46, name: 'Петролейный эфир', date: '2023-04-05', batch: 'PET-030', supplier: 'РастворительХим', expiryDate: '2024-10-05', stock: 70 },
    { id: 47, name: 'Фруктоза', date: '2023-02-28', batch: 'FRU-031', supplier: 'БиоХим', expiryDate: '2025-02-28', stock: 130 },
    { id: 48, name: 'Лактоза', date: '2023-05-20', batch: 'LAC-032', supplier: 'БиоХим', expiryDate: '2025-05-20', stock: 110 },
    { id: 49, name: 'Хлорид бария', date: '2023-03-15', batch: 'BaCl2-033', supplier: 'ХимПром', expiryDate: '2026-03-15', stock: 65 },
    { id: 50, name: 'Сульфат железа', date: '2023-01-10', batch: 'FeSO4-034', supplier: 'РеактивМаркет', expiryDate: '2024-07-10', stock: 95 },
    { id: 51, name: 'Карбонат кальция', date: '2023-06-15', batch: 'CaCO3-035', supplier: 'ХимПром', expiryDate: '2026-06-15', stock: 210 },
    { id: 52, name: 'Лимонная кислота', date: '2023-04-15', batch: 'CIT-036', supplier: 'КислотыПлюс', expiryDate: '2025-04-15', stock: 160 },
    { id: 53, name: 'Бутилацетат', date: '2023-02-10', batch: 'BAC-037', supplier: 'ОрганикаПлюс', expiryDate: '2024-08-10', stock: 75 },
    { id: 54, name: 'Конго красный', date: '2023-05-05', batch: 'IND-038', supplier: 'ИндикаторПром', expiryDate: '2025-05-05', stock: 30 },
    { id: 55, name: 'Циклогексан', date: '2023-03-05', batch: 'CYC-039', supplier: 'РастворительХим', expiryDate: '2025-03-05', stock: 90 },
    { id: 56, name: 'Мальтоза', date: '2023-01-25', batch: 'MAL-040', supplier: 'БиоХим', expiryDate: '2025-01-25', stock: 105 },
    { id: 57, name: 'Хлорид цинка', date: '2023-06-10', batch: 'ZnCl2-041', supplier: 'ХимПром', expiryDate: '2026-06-10', stock: 85 },
    { id: 58, name: 'Нитрат аммония', date: '2023-04-20', batch: 'NH4NO3-042', supplier: 'РеактивМаркет', expiryDate: '2025-04-20', stock: 175 },
    { id: 59, name: 'Щавелевая кислота', date: '2023-02-05', batch: 'OXA-043', supplier: 'КислотыПлюс', expiryDate: '2025-02-05', stock: 70 },
    { id: 60, name: 'Этилацетат', date: '2023-05-25', batch: 'EAC-044', supplier: 'ОрганикаПлюс', expiryDate: '2024-11-25', stock: 95 },
    { id: 61, name: 'Эозин', date: '2023-03-30', batch: 'IND-045', supplier: 'ИндикаторПром', expiryDate: '2025-03-30', stock: 40 },
    { id: 62, name: 'Дихлорметан', date: '2023-01-15', batch: 'DCM-046', supplier: 'РастворительХим', expiryDate: '2024-07-15', stock: 65 },
    { id: 63, name: 'Галактоза', date: '2023-06-20', batch: 'GAL-047', supplier: 'БиоХим', expiryDate: '2025-06-20', stock: 95 },
    { id: 64, name: 'Хлорид никеля', date: '2023-04-10', batch: 'NiCl2-048', supplier: 'ХимПром', expiryDate: '2026-04-10', stock: 55 },
    { id: 65, name: 'Сульфат алюминия', date: '2023-02-20', batch: 'Al2(SO4)3-049', supplier: 'РеактивМаркет', expiryDate: '2025-02-20', stock: 130 },
    { id: 66, name: 'Янтарная кислота', date: '2023-05-15', batch: 'SUC-050', supplier: 'КислотыПлюс', expiryDate: '2025-05-15', stock: 75 },
    { id: 67, name: 'Изобутанол', date: '2023-03-25', batch: 'IBU-051', supplier: 'СпиртХим', expiryDate: '2024-09-25', stock: 85 },
    { id: 68, name: 'Нейтральный красный', date: '2023-01-05', batch: 'IND-052', supplier: 'ИндикаторПром', expiryDate: '2025-01-05', stock: 35 },
    { id: 69, name: 'Тетрагидрофуран', date: '2023-06-05', batch: 'THF-053', supplier: 'РастворительХим', expiryDate: '2024-12-05', stock: 60 },
    { id: 70, name: 'Рибоза', date: '2023-04-30', batch: 'RIB-054', supplier: 'БиоХим', expiryDate: '2025-04-30', stock: 85 },
    { id: 71, name: 'Хлорид кобальта', date: '2023-02-25', batch: 'CoCl2-055', supplier: 'ХимПром', expiryDate: '2026-02-25', stock: 45 },
    { id: 72, name: 'Нитрат магния', date: '2023-05-30', batch: 'Mg(NO3)2-056', supplier: 'РеактивМаркет', expiryDate: '2025-05-30', stock: 110 },
    { id: 73, name: 'Муравьиная кислота', date: '2023-03-20', batch: 'FOR-057', supplier: 'КислотыПлюс', expiryDate: '2024-09-20', stock: 95 },
    { id: 74, name: 'Пентанол', date: '2023-01-30', batch: 'PEN-058', supplier: 'СпиртХим', expiryDate: '2025-01-30', stock: 70 },
    { id: 75, name: 'Бриллиантовый зеленый', date: '2023-06-25', batch: 'IND-059', supplier: 'ИндикаторПром', expiryDate: '2025-06-25', stock: 25 },
    { id: 76, name: 'Диоксан', date: '2023-04-01', batch: 'DIO-060', supplier: 'РастворительХим', expiryDate: '2024-10-01', stock: 55 },
    { id: 77, name: 'Ксилоза', date: '2023-02-15', batch: 'XYL-061', supplier: 'БиоХим', expiryDate: '2025-02-15', stock: 75 },
    { id: 78, name: 'Хлорид меди', date: '2023-05-10', batch: 'CuCl2-062', supplier: 'ХимПром', expiryDate: '2026-05-10', stock: 60 },
    { id: 79, name: 'Сульфат цинка', date: '2023-03-10', batch: 'ZnSO4-063', supplier: 'РеактивМаркет', expiryDate: '2025-03-10', stock: 140 },
    { id: 80, name: 'Бензойная кислота', date: '2023-01-20', batch: 'BEN-064', supplier: 'КислотыПлюс', expiryDate: '2025-01-20', stock: 85 },
    { id: 81, name: 'Гексанол', date: '2023-06-30', batch: 'HEX-065', supplier: 'СпиртХим', expiryDate: '2024-12-30', stock: 65 },
    { id: 82, name: 'Тимолфталеин', date: '2023-04-05', batch: 'IND-066', supplier: 'ИндикаторПром', expiryDate: '2025-04-05', stock: 30 },
    { id: 83, name: 'Хлороформ', date: '2023-02-28', batch: 'CHL-067', supplier: 'РастворительХим', expiryDate: '2024-08-28', stock: 75 },
    { id: 84, name: 'Арабиноза', date: '2023-05-20', batch: 'ARA-068', supplier: 'БиоХим', expiryDate: '2025-05-20', stock: 65 },
    { id: 85, name: 'Хлорид железа', date: '2023-03-15', batch: 'FeCl3-069', supplier: 'ХимПром', expiryDate: '2026-03-15', stock: 95 },
    { id: 86, name: 'Нитрат цинка', date: '2023-01-10', batch: 'Zn(NO3)2-070', supplier: 'РеактивМаркет', expiryDate: '2025-01-10', stock: 120 },
    { id: 87, name: 'Салициловая кислота', date: '2023-06-15', batch: 'SAL-071', supplier: 'КислотыПлюс', expiryDate: '2025-06-15', stock: 70 },
    { id: 88, name: 'Октанол', date: '2023-04-15', batch: 'OCT-072', supplier: 'СпиртХим', expiryDate: '2024-10-15', stock: 55 },
    { id: 89, name: 'Ализариновый красный', date: '2023-02-10', batch: 'IND-073', supplier: 'ИндикаторПром', expiryDate: '2025-02-10', stock: 25 },
    { id: 90, name: 'Тетрахлорметан', date: '2023-05-05', batch: 'CCl4-074', supplier: 'РастворительХим', expiryDate: '2024-11-05', stock: 45 },
    { id: 91, name: 'Маннит', date: '2023-03-05', batch: 'MAN-075', supplier: 'БиоХим', expiryDate: '2025-03-05', stock: 90 },
    { id: 92, name: 'Хлорид марганца', date: '2023-01-25', batch: 'MnCl2-076', supplier: 'ХимПром', expiryDate: '2026-01-25', stock: 75 },
    { id: 93, name: 'Сульфат никеля', date: '2023-06-10', batch: 'NiSO4-077', supplier: 'РеактивМаркет', expiryDate: '2025-06-10', stock: 85 },
    { id: 94, name: 'Аскорбиновая кислота', date: '2023-04-20', batch: 'ASC-078', supplier: 'КислотыПлюс', expiryDate: '2024-10-20', stock: 150 },
    { id: 95, name: 'Деканол', date: '2023-02-05', batch: 'DEC-079', supplier: 'СпиртХим', expiryDate: '2025-02-05', stock: 40 },
    { id: 96, name: 'Кристаллический фиолетовый', date: '2023-05-25', batch: 'IND-080', supplier: 'ИндикаторПром', expiryDate: '2025-05-25', stock: 20 },
    { id: 97, name: 'Пиридин', date: '2023-03-30', batch: 'PYR-081', supplier: 'РастворительХим', expiryDate: '2024-09-30', stock: 35 },
    { id: 98, name: 'Сорбит', date: '2023-01-15', batch: 'SOR-082', supplier: 'БиоХим', expiryDate: '2025-01-15', stock: 80 },
    { id: 99, name: 'Хлорид хрома', date: '2023-06-20', batch: 'CrCl3-083', supplier: 'ХимПром', expiryDate: '2026-06-20', stock: 50 },
    { id: 100, name: 'Нитрат меди', date: '2023-04-10', batch: 'Cu(NO3)2-084', supplier: 'РеактивМаркет', expiryDate: '2025-04-10', stock: 70 }
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