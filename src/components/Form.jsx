import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import OneForm from './OneForm';


const Formes = ({ tableRow }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(25);
    const location = useLocation();
    const getTitle = () => {
        switch (location.pathname) {
            case '/companies': return 'Companies';
            case '/contact': return 'Contacts';
            case '/deals': return 'Deals';
            case '/lists': return 'Lists';
            case '/inbox': return 'Inbox';
            case '/calls': return 'Calls';
            case '/tasks': return 'Tasks';
            case '/invoices': return 'Invoices';
            case '/payment': return 'Payment';
            default: return 'Dashboard';
        }
    };

    // Sample data - replace with your actual data
    const companies = [
        {
            id: 1,
            name: "HubSpot",
            owner: "Preview",
            createDate: "Mar 11, 2025 8:45 PM GMT+5",
            phone: "--",
            lastActivity: "--"
        },
        // Add more companies as needed
    ];


    return (
        <div className="p-6 bg-white rounded-lg shadow-sm">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold">{getTitle()}</h1>
                    <span className="text-gray-500">{companies.length} record{companies.length !== 1 ? 's' : ''}</span>
                </div>
                <div>
                    <OneForm />
                </div>
            </div>

            {/* Subheader */}
            <h2 className="text-lg font-semibold mb-4">All {getTitle()}</h2>

            {/* Filters Section */}
            <div className="flex flex-wrap gap-4 mb-6">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-sm btn-outline">
                        <span>{getTitle()} owner</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Option 1</a></li>
                        <li><a>Option 2</a></li>
                    </ul>
                </div>

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-sm btn-outline">
                        <span>Create date</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Today</a></li>
                        <li><a>Yesterday</a></li>
                        <li><a>Last 7 days</a></li>
                    </ul>
                </div>

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-sm btn-outline">
                        <span>Last activity date</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Recent</a></li>
                        <li><a>Older</a></li>
                    </ul>
                </div>

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-sm btn-outline">
                        <span>Lead status</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>New</a></li>
                        <li><a>Contacted</a></li>
                        <li><a>Qualified</a></li>
                    </ul>
                </div>

                <button className="btn btn-sm btn-outline">+ More</button>
                <button className="btn btn-sm btn-outline">Advanced filters</button>
            </div>

            <div className="divider my-4"></div>

            {/* Search Bar */}
            <div className="mb-6">
                <div className="form-control">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Search name, phone, or dt"
                            className="input input-bordered w-11/12"
                        />
                        <button className="btn btn-square btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Companies Table */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            {tableRow.map((item, ind) => {
                                return <th key={ind}>{item}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map((company) => (
                            <tr key={company.id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{company.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{company.owner}</td>
                                <td>{company.createDate}</td>
                                <td>{company.phone}</td>
                                <td>{company.lastActivity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6">
                <div>
                    <button
                        className="btn btn-sm btn-outline mr-2"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    >
                        Prev
                    </button>
                    <button
                        className="btn btn-sm btn-outline"
                        disabled={companies.length < itemsPerPage}
                        onClick={() => setCurrentPage(prev => prev + 1)}
                    >
                        Next
                    </button>
                </div>
                <div className="flex items-center">
                    <span className="mr-2">Rows per page:</span>
                    <select
                        className="select select-bordered select-sm w-20"
                        value={itemsPerPage}
                        onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Formes;