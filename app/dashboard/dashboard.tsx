'use client';
import React from 'react';

import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  Search,
  Bell,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import Members from './dashcom/members';
import Header from '../components/header';

const Dashboard = () => {



  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 pt-5">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-6">
          <div className="flex items-center space-y-4 flex-col">
          </div>
          <h2 className="text-2xl font-bold text-indigo-600">JIB Database</h2>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
          <NavItem icon={<Users size={20} />} label="Members" />
          <NavItem icon={<Settings size={20} />} label="Settings" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />

        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <div className="relative w-96">
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="flex-1 overflow-scroll p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold"> Under Construction</h1>
            <a href={`https://jibd.vercel.app/admin/form`} target='_blank' className="bg-green-500 text-white px-4 py-1 rounded mr-2">Add a New Member</a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          </div>

          {/* Main Visual Area */}
          <div className="">
            <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm p-2 flex flex-col items-between justify-center">
              <Members />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) => (
  <div className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition ${active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'}`}>
    {icon}
    <span className="font-medium">{label}</span>
  </div>
);
export default Dashboard;