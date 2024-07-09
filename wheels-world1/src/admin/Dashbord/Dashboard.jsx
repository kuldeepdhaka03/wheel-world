import React from 'react';
import OverView from '../pages/OverView';
import CarsTable from '../pages/CarTable';
import Chart from '../pages/Chart';
import Sidebar from '../Layouts/Sidebar';
import TopNav from '../Layouts/TopNav';

const DashboardPage = () => {
    return (
        <div className="ml-64 p-8">
            <TopNav/>
            <Sidebar/>
            <h1 className="text-3xl font-semibold mb-8">Dashboard</h1>
            <OverView />
            <Chart />
            <CarsTable />
        </div>
    );
};

export default DashboardPage;
