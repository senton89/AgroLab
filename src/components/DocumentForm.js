// DocumentForm.jsx
import React from 'react';
import SearchBar from './SearchBar';
import DocumentTable from './DocumentTable';

const DocumentForm = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <h2 className="text-lg font-bold mb-4">Компоненты документа</h2>
            <form>
                <div className="flex">
                <SearchBar/>
                <DocumentTable/>
                <div className="flex justify-end">
                    <button type="button" className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded">Отменить</button>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Сохранить</button>
                </div>
                </div>
            </form>
        </div>
    );
};

export default DocumentForm;