import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { Line } from 'react-chartjs-2';
import {
  AlertCircle,
  HandHelping,
  Settings,
  LayoutDashboard,
  CalendarDays,
  User,
  BadgeInfo,
  ChartArea,
  Receipt,
  MapPinCheckInside,
} from 'lucide-react';
import Avatar from '@mui/material/Avatar';
import { DownOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { DummyData } from '../components/DummyData';
import { Pie } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Check authentication
    if (!localStorage.getItem('authToken')) {
      navigate('/');
    }
    // Simulate API call
    setTimeout(() => {
      setData(DummyData);
    }, 1000);
  }, [navigate]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#1f2937', font: { size: 12 } },
      },
      title: { display: false },
    },
    scales: {
      x: { ticks: { color: '#1f2937' }, grid: { color: 'rgba(209, 213, 219, 0.2)' } },
      y: { beginAtZero: true, ticks: { color: '#1f2937' }, grid: { color: 'rgba(209, 213, 219, 0.2)' } },
    },
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#1f2937', font: { size: 12 } },
      },
    },
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  const menuItems = [
    {
      key: 'logout',
      label: (
        <span onClick={handleLogout}>
          <LogoutOutlined className="mr-2  text-black" />
          Logout
        </span>
      ),
    },
  ];

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <p className="text-gray-900 dark:text-gray-200">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-200 flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-gray-200 text-white px-4 py-2 shadow">
        <div className="flex justify-between items-center">
          <h1 className="text-xl text-gray-500 font-bold">CareLink</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <AlertCircle size={24} color="red" />
              <span className="ml-2 text-sm text-gray-500">Alert</span>
            </div>
            <div className="flex items-center">
              <HandHelping size={24} color="red" />
              <span className="ml-2 text-sm text-gray-500">Help</span>
            </div>
            <div className="flex items-center">
              <Settings size={24} color="red" />
              <span className="ml-2 text-sm text-gray-500">Settings</span>
            </div>
            <div className="flex items-center">
              <Dropdown menu={{ items: menuItems }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <LogoutOutlined className="mr-2 !text-black" />
                  </Space>
                </a>
              </Dropdown>
            </div>
            <div>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar backgroundColor="blue-100" className="dark:bg-blue-800 rounded-md m-2 overflow-hidden sticky shadow-lg">
          <Menu
            menuItemStyles={{
              button: {
                '&.active': { backgroundColor: '#3b82f6', color: '#ffffff' },
                color: '#ffffff',
                '&:hover': { backgroundColor: '#2563eb', color: '#ffffff' },
                padding: '10px 20px',
              },
            }}
          >
            <MenuItem component={<Link to="/dashboard" />} aria-label="Navigate to Dashboard">
              <div className="flex items-center w-full gap-2">
                <LayoutDashboard className="text-gray-400" size={20} />
                <span>Dashboard</span>
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/schedules" />} aria-label="Navigate to Calendar">
              <div className="flex items-center w-full gap-2">
                <CalendarDays className="text-gray-400" size={20} />
                <span>Calendar</span>
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/patients" />} aria-label="Navigate to Patients">
              <div className="flex items-center w-full gap-2">
                <User className="text-gray-400" size={20} />
                <span>Patients</span>
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/appointments" />} aria-label="Navigate to Appointments">
              <div className="flex items-center w-full gap-2">
                <MapPinCheckInside className="text-gray-400" size={20} />
                <span>Appointments</span>
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/billing" />} aria-label="Navigate to Billing">
              <div className="flex items-center w-full gap-2">
                <Receipt className="text-gray-400" size={20} />
                <span>Billings</span>
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/echarts" />} aria-label="Navigate to Echarts">
              <div className="flex items-center w-full gap-2">
                <ChartArea className="text-gray-400" size={20} />
                <span>Echarts</span>
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/help-center" />} aria-label="Navigate to Help Center">
              <div className="flex items-center w-full gap-2">
                <BadgeInfo className="text-gray-400" size={20} />
                <span>Help Center</span>
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/settings" />} aria-label="Navigate to Settings">
              <div className="flex items-center w-full gap-2">
                <Settings className="text-gray-400" size={20} />
                <span>Settings</span>
              </div>
            </MenuItem>
          </Menu>
        </Sidebar>

        {/* Main Dashboard Section */}
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-gray-200 dark:text-gray-500 mb-8">Dashboard</h1>
          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Total Patients">
              <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">{data.totalPatients}</p>
            </Card>
            <Card title="Today's Appointments">
              <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">{data.todayAppointments.length}</p>
            </Card>
            <Card title="Upcoming Appointments">
              <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">{data.upcomingAppointments.length}</p>
            </Card>
            <Card title="Patient Trends (Monthly Visits)">
              <div className="relative aspect-[4/3]">
                <Line data={data.patientTrends} options={chartOptions} />
              </div>
            </Card>
            <Card title="Appointment Status">
              <div className="relative aspect-[4/3]">
                <Pie data={data.appointmentStatus} options={pieChartOptions}></Pie>
              </div>
            </Card>
            <Card title="Today's Appointments">
              <ul className="mt-4 space-y-2">
                {data.todayAppointments.map((appointment) => (
                  <li
                    key={appointment.id}
                    className="flex justify-between items-center text-gray-700 dark:text-gray-500"
                  >
                    <span>{appointment.time}</span>
                    <span className="font-medium">{appointment.patient}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
