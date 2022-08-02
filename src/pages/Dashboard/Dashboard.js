import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddAdmin from './AddAdmin';
import AddService from './AddService';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {
    return (
        <DashboardSidebar>
            <Routes>
                <Route path="/dashboard/add-admin" element={<AddAdmin></AddAdmin>}></Route>
                <Route path="/dashboard/add-service" element={<AddService></AddService>}></Route>
            </Routes>
        </DashboardSidebar>
    );
};

export default Dashboard;