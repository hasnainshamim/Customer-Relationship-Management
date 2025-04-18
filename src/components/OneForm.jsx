import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';


const OneForm = () => {
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

    const [formData, setFormData] = useState({
        name: '',
        owner: '',
        phone: '',
        email: '',
        industry: '',
        status: 'active',
        notes: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreateCompany(formData);
        onClose();
    };


    // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleCreateCompany = (companyData) => {
        // Handle company creation logic here
        console.log('New company:', companyData);
        // Add to your state or API call
    };

    return (
        <div className="drawer drawer-end z-10">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Create {getTitle()}</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex-1 overflow-y-auto menu bg-base-200 text-base-content min-h-full w-96 p-7">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            {/* Company Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company Name*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter company name"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            {/* Owner */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company Owner</span>
                                </label>
                                <input
                                    type="text"
                                    name="owner"
                                    value={formData.owner}
                                    onChange={handleChange}
                                    placeholder="Enter owner name"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Contact Info */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter phone number"
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter email"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                            </div>

                            {/* Industry */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Industry</span>
                                </label>
                                <select
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleChange}
                                    className="select select-bordered w-full"
                                >
                                    <option value="">Select industry</option>
                                    <option value="technology">Technology</option>
                                    <option value="finance">Finance</option>
                                    <option value="healthcare">Healthcare</option>
                                    <option value="retail">Retail</option>
                                    <option value="education">Education</option>
                                </select>
                            </div>

                            {/* Status */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Status</span>
                                </label>
                                <div className="flex gap-4">
                                    <label className="label cursor-pointer gap-2">
                                        <input
                                            type="radio"
                                            name="status"
                                            value="active"
                                            checked={formData.status === 'active'}
                                            onChange={handleChange}
                                            className="radio radio-primary"
                                        />
                                        <span className="label-text">Active</span>
                                    </label>
                                    <label className="label cursor-pointer gap-2">
                                        <input
                                            type="radio"
                                            name="status"
                                            value="inactive"
                                            checked={formData.status === 'inactive'}
                                            onChange={handleChange}
                                            className="radio radio-primary"
                                        />
                                        <span className="label-text">Inactive</span>
                                    </label>
                                </div>
                            </div>

                            {/* Notes */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Notes</span>
                                </label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    placeholder="Additional notes..."
                                    className="textarea textarea-bordered w-full h-24"
                                ></textarea>
                            </div>
                        </div>

                        {/* Form Actions */}
                        <div className="mt-6 flex justify-end gap-2">
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Create Company
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default OneForm