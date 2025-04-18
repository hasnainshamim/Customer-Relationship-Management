import { 
  LineChart, Line,
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

import Performance from '../../components/charts/Performance';

const Dashboard = () => {

  const progressData = [
    { month: 'Jan', contacts: 50, deals: 5 },
    { month: 'Feb', contacts: 75, deals: 8 },
    { month: 'Mar', contacts: 120, deals: 12 },
    { month: 'Apr', contacts: 150, deals: 15 },
  ];

  const statusData = [
    { name: 'New', value: 25 },
    { name: 'Contacted', value: 35 },
    { name: 'Qualified', value: 20 },
    { name: 'Closed', value: 20 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <div className="flex gap-2">
          <select className="select select-bordered select-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>This Quarter</option>
          </select>
          <button className="btn btn-primary btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Export
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <div className="stats bg-white shadow">
          <div className="stat">
            <div className="stat-title">Contacts</div>
            <div className="stat-value text-primary">1,248</div>
            <div className="stat-desc">↑ 12% from last month</div>
          </div>
        </div>
        
        <div className="stats bg-white shadow">
          <div className="stat">
            <div className="stat-title">Companies</div>
            <div className="stat-value text-secondary">428</div>
            <div className="stat-desc">↑ 8% from last month</div>
          </div>
        </div>
        
        <div className="stats bg-white shadow">
          <div className="stat">
            <div className="stat-title">Deals</div>
            <div className="stat-value text-accent">64</div>
            <div className="stat-desc">↑ 23% from last month</div>
          </div>
        </div>
        
        <div className="stats bg-white shadow">
          <div className="stat">
            <div className="stat-title">Tasks</div>
            <div className="stat-value">28</div>
            <div className="stat-desc">5 overdue</div>
          </div>
        </div>
        
        <div className="stats bg-white shadow">
          <div className="stat">
            <div className="stat-title">Revenue</div>
            <div className="stat-value">$24,580</div>
            <div className="stat-desc">↓ 3% from last month</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Top Performers */}
        <Performance sizer={2}/>

        {/* Lead Status */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Lead Status</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Progress Chart */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-4">Monthly Progress</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={progressData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="contacts" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="deals" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Type</th>
                <th>Details</th>
                <th>User</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>New Deal</td>
                <td>Acme Corporation - $12,000</td>
                <td>John Doe</td>
                <td>2 hours ago</td>
                <td><span className="badge badge-success">Active</span></td>
              </tr>
              <tr>
                <td>Contact Added</td>
                <td>Jane Smith (Acme Corp)</td>
                <td>Sarah Johnson</td>
                <td>5 hours ago</td>
                <td><span className="badge badge-info">New</span></td>
              </tr>
              <tr>
                <td>Task Completed</td>
                <td>Follow up with client</td>
                <td>Mike Brown</td>
                <td>Yesterday</td>
                <td><span className="badge badge-success">Done</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;