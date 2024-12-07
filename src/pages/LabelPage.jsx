import React, { useState } from 'react';
import LabelForm from '../components/LabelForm';
import LabelPreview from '../components/LabelPreview';

const LabelPage = () => {
    const [formData, setFormData] = useState(null);

    const handleSubmit = (data) => {
        setFormData(data);
    };

    return (
        <div className="container mx-auto p-4 mt-4">
            <h1 className="text-center font-bold text-2xl">Создание этикетки</h1>
            <LabelForm onSubmit={handleSubmit} />
            {formData && <LabelPreview data={formData} />}
        </div>
    );
};

export default LabelPage;