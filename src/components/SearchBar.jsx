// SearchBar.jsx
import React from 'react';

const SearchBar = () => {
    return (
        <div className="mb-4">
            <input type="search" placeholder="Поисковый запрос" className="w-full p-2 border border-gray-300 rounded" />
        </div>
    );
};

export default SearchBar;