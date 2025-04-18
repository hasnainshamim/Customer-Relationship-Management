import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { MainLayout } from '../RouteConfig/MainRoutes'

const Layout = () => {
    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="w-64 bg-white ">
                {/* Sidebar Content */}
                <Sidebar/>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden z-10">
                {/* Top Header */}
                <header className="bg-white ">
                    {/* Header Content */}
                    <Navbar/>
                </header>

                {/* Dashboard Area */}
                <main className="flex-1 overflow-y-auto p-4 z-10">
                    {/* Page Content */}
                   <MainLayout/>
                </main>
            </div>
        </div>
    )
}

export default Layout