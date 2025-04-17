import React from 'react';

const Sidebar = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        
        <div className="menu bg-white text-base-content min-h-full w-64 p-4 border-r border-gray-200 flex flex-col">
          {/* Logo Section */}
          <div className='mb-8 px-2 py-4'>
            <h1 className='font-bold text-2xl text-indigo-600'>PlanetCRM</h1>
          </div>
          
          {/* Main Navigation */}
          <nav className="flex-1 flex flex-col">
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 mb-3">MAIN</h3>
              <ul className="space-y-1">
                <li>
                  <a className="flex items-center px-3 py-2 rounded-md bg-indigo-50 text-indigo-600">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Secondary Navigation */}
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 mb-3">TOOLS</h3>
              <ul className="space-y-1">
                <li>
                  <a className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Deals
                  </a>
                </li>
                <li>
                  <a className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Calendar
                  </a>
                </li>
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