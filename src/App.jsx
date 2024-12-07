import React from 'react';
import {BrowserRouter, Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LabelPage from './pages/LabelPage';
import LabelPreview from "./components/Label/LabelPreview";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import DocumentForm from "./components/Document/DocumentForm";
import ReagentManagement from "./components/Reagent/ReagentManagement";
import CultureManagement from "./components/Culture/CultureManagement";
import EquipmentManagement from "./components/Equipment/EquipmentManagement";
import CustomerManagement from "./components/Customer/CustomerManagement";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to='/main'/>} />
                <Route path="/label" element={<LabelPage />} />
                <Route path="/label-preview" element={<LabelPreview/>}/>
                <Route path="/main" element={<div className="bg-gray-100 flex">
                    <Sidebar/>
                </div>
                }/>
                <Route path="/main-content" element={
                    <div className="bg-gray-100 flex">
                        <Sidebar/>
                        <MainContent/>
                    </div>
                }/>
                <Route path="/document-content" element={
                    <div className="bg-gray-100 flex">
                        <Sidebar/>
                        <DocumentForm/>
                    </div>
                }/>
                <Route path="/reagent-table" element={
                    <div className="flex">
                        <Sidebar/>
                        <div className="flex-1 p-4">
                            <ReagentManagement/>
                        </div>
                    </div>
                }/>
                <Route path="/culture-table" element={
                    <div className="flex">
                        <Sidebar/>
                        <div className="flex-1 p-4">
                            <CultureManagement/>
                        </div>
                    </div>
                }/>
                <Route path="/equipment-table" element={
                    <div className="flex">
                        <Sidebar/>
                        <div className="flex-1 p-4">
                            <EquipmentManagement/>
                        </div>
                    </div>
                }/>
                <Route path="/customers" element={
                    <div className="flex">
                        <Sidebar/>
                        <div className="flex-1 p-4">
                            <CustomerManagement/>
                        </div>
                    </div>
                }/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;