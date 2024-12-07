import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/LabelPreview.css'

const LabelPreview = () => {
    const location = useLocation();
    const { formData } = location.state || {}; // Access formData from state

    if (!formData) {
        return <div>No data available</div>; // Handle case where no data is passed
    }

    return (
            <div className="label-container">
                <h1 className="label-title">ЭТИКЕТКА</h1>
                <p className="label-subtitle">к средней пробе семян</p>
                <div className="label-header">
                    <div>№___</div>
                    <div>от {new Date().getFullYear()} г.</div>
                </div>
                <div className="label-content">
                    <div className="label-item">
                        <p>1.</p>
                        <p>Культура</p>
                        <span className="field-value">{formData.culture}</span>
                    </div>
                    <hr className="label-divider"/>
                    <div className="label-item">
                        <p>2.</p>
                        <p>Сорт</p>
                        <span className="field-value">{formData.sortName}</span>
                    </div>
                    <hr className="label-divider"/>
                    <div className="label-item">
                        <p>3.</p>
                        <p>Репродукция</p>
                            <span className="field-value">{formData.reproduction}
                            </span>
                    </div>
                    <hr className="label-divider"/>
                    <div className="label-item">
                        <p>4. Год урожая</p>
                            <span className="field-value">{formData.harvestYear}</span>
                    </div>
                    <hr className="label-divider"/>
                    <div className="label-item">
                        <p>5. Партия №</p>
                            <span className="field-value">{formData.batchNumber}</span>
                    </div>
                    <hr className="label-divider"/>
                    <div className="label-item">
                        <p>6. Масса партии, ц</p>
                            <span className="field-value">{formData.batchWeight}
                        </span>
                    </div>
                    <hr className="label-divider"/>
                    <div className="label-item">
                        <p>7. Контрольная единица №</p>
                            <span className="field-value">{formData.controlUnit}
                        </span>
                    </div>
                    <hr className="label-divider"/>
                    <div className="label-item">
                        <p>8. Вид анализа</p>
                            <span className="field-value">{formData.analysisType}</span>
                    </div>
                    <hr className="label-divider"/>
                </div>
            </div>
    );
};

export default LabelPreview;