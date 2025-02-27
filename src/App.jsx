import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LabelPage from './pages/LabelPage';
import LabelPreview from "./components/Label/LabelPreview";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import DocumentForm from "./components/Document/DocumentForm";
import ReagentManagement from "./components/Reagent/ReagentManagement";
import CultureManagement from "./components/Culture/CultureManagement";
import AddCultureForm from "./components/Culture/AddCultureForm";
import EquipmentManagement from "./components/Equipment/EquipmentManagement";
import CustomerManagement from "./components/Customer/CustomerManagement";
import SampleManagement from "./components/Sample/SampleManagement";
import OrderManagement from "./components/Orders/OrderManagement";
import ProtectedRoute from './components/ProtectedRoute';
import LoginForm from "./components/Auth/LoginForm";
import RegistrationForm from "./components/Auth/RegistrationForm"; // Import the ProtectedRoute component
import AddEquipmentForm from "./components/Equipment/AddEquipmentForm"; // Import the AddEquipmentForm component
import AddReagentForm from './components/Reagent/AddReagentForm';
import AddOrderForm from './components/Orders/AddOrderForm';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to='/main' />} />
                <Route path="/label" element={<LabelPage />} />
                <Route path="/label-preview" element={<LabelPreview />} />
                <Route path="/login" element={
                            <LoginForm/>
                } />
                {/* Protected routes */}
                <Route path="/main" element={
                    <ProtectedRoute>
                        <div className="bg-gray-100 flex">
                            <Sidebar />
                        </div>
                    </ProtectedRoute>
                } />
                <Route path="/register" element={
                    <ProtectedRoute>
                        <div className="flex">
                            <Sidebar/>
                            {(() => {
                                const user = JSON.parse(localStorage.getItem('user')); // Retrieve user
                                const isAdmin = user && user.role === 'admin'; // Check if user exists and is admin
                                return <RegistrationForm isAdmin={isAdmin} />;
                            })()}
                        </div>
                    </ProtectedRoute>
                } />
                <Route path="/main-content" element={
                    <ProtectedRoute>
                        <div className="bg-gray-100 flex">
                            <Sidebar />
                            <MainContent />
                        </div>
                    </ProtectedRoute>
                } />
                <Route path="/document-content" element={
                    <ProtectedRoute>
                        <div className="bg-gray-100 flex">
                            <Sidebar />
                            <DocumentForm />
                        </div>
                    </ProtectedRoute>
                } />
                <Route path="/reagent-table" element={
                    <ProtectedRoute>
                        <div className="flex">
                            <Sidebar />
                            <div className="flex-1 p-4">
                                <ReagentManagement />
                            </div>
                        </div>
                    </ProtectedRoute>
                } />
                <Route path="/reagents/add" element={
                    <ProtectedRoute>
                        <div className="flex">
                            <Sidebar />
                            <div className="flex-1 p-4 container mx-auto">
                                <AddReagentForm />
                            </div>
                        </div>
                    </ProtectedRoute>
                } />
                <Route path="/culture-table" element={
                    <ProtectedRoute>
                        <div className="flex">
                            <Sidebar />
                            <div className="flex-1 p-4">
                                <CultureManagement />
                            </div>
                        </div>
                    </ProtectedRoute>
                } />
                <Route path="/add-culture" element={
                    <ProtectedRoute>
                        <div className="flex">
                            <Sidebar />
                            <div className="flex-1 p-4 container mx-auto">
                                <AddCultureForm onAdd={(culture) => console.log('New culture:', culture)} onClose={() => navigate('/culture-table')} />
                            </div>
                        </div>
                    </ProtectedRoute>
                } />
                <Route path="/equipment-table" element={
                    <ProtectedRoute>
                        <div className="flex">
                            <Sidebar />
                            <div className="flex-1 p-4">
                                <EquipmentManagement />
                            </div>
                        </div>
                    </ProtectedRoute>
                } />
                <Route path="/add-equipment" element={
                    <ProtectedRoute>
                        <div className="flex">
                            <Sidebar />
                            <div className="flex-1 p-4 container mx-auto">
                                <AddEquipmentForm onAdd={(equipment) => console.log('New equipment:', equipment)} onClose={() => navigate('/equipment-table')} />
                            </div>
                        </div>
                    </ProtectedRoute>
                } />
                <Route path="/customers" element={
                    <ProtectedRoute>
                        <div className="flex">
                            <Sidebar />
                            <div className="flex-1 p-4">
                                <CustomerManagement />
                            </div>
                        </div>
                    </ProtectedRoute>
                } />
                <Route path="/samples" element={
                    <ProtectedRoute>
                        <div className="flex">
                            <Sidebar />
                            <div className="flex-1 p-4">
                                <SampleManagement />
                            </div>
                        </div>
                    </ProtectedRoute>
                } />
                <Route path="/orders" element={
                    <ProtectedRoute>
                        <div className="flex">
                            <Sidebar />
                            <div className="flex-1 p-4">
                                <OrderManagement />
                            </div>
                        </div>
                    </ProtectedRoute>
                } />
                <Route path="/orders/add" element={
                    <ProtectedRoute>
                        <div className="flex">
                            <Sidebar />
                            <div className="flex-1 p-4 container mx-auto">
                                <AddOrderForm />
                            </div>
                        </div>
                    </ProtectedRoute>
                } />
            </Routes>
        </BrowserRouter>
    );
};

export default App;