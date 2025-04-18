import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Sidebar = () => {

  // Menu items ko improve karein
  const [menuItems, setMenuItems] = useState([
    {
      name: "Dashboard",
      path: "/",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",

    },
    {
      name: "Contact",
      path: "/contact",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",

    },
    {
      name: "Companies",
      path: "/companies",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",

    },
    {
      name: "Deals",
      path: "/deals",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",

    },
    {
      name: "Inbox",
      path: "/inbox",
      icon: "M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20",

    },
    {
      name: "Lists",
      path: "/lists",
      icon: "M4 6h16M4 10h16M4 14h16M4 18h16",

    },
    
    {
      name: "Calls",
      path: "/calls",
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",

    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",

    },
    {
      name: "Invoices",
      path: "/invoices",
      icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z",

    },
    {
      name: "Payment",
      path: "/payment",
      icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",

    }
  ]);

  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

        <div className="menu bg-white text-base-content min-h-full w-64 p-4 border-none flex flex-col">
          {/* Logo Section */}
          <div className='mb-8 px-2 py-4'>
            <h1 className='font-bold text-2xl text-indigo-600'>PlanetCRM</h1>
          </div>

          {/* Main Navigation */}
          <nav className="flex-1 flex flex-col">

            {/* Secondary Navigation */}
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 mb-3">Menu</h3>
              <ul className="space-y-1">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className={`flex items-center px-3 py-2 rounded-md hover:bg-gray-100 ${activeLink === item.path ? 'bg-indigo-50 text-indigo-600' : ''}`}
                      onClick={() => setActiveLink(item.path)}
                    >
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                      </svg>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Bottom User Section */}
          <div className="mt-auto pt-4 border-t border-gray-200">
            <div className="flex items-center px-2 py-3 hover:bg-gray-100 rounded-md cursor-pointer">
              <div className="avatar placeholder mr-3">
                <div className="bg-indigo-100 text-indigo-600 rounded-full w-8">
                  <span className="text-xs">AK</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Muhammad Hussain</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;