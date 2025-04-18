import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class AreaChartComponent extends PureComponent {
  render() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Revenue Overview</h2>
            <p className="text-sm text-gray-500">Monthly performance metrics</p>
          </div>
          <div className="flex space-x-2">
            <select className="select select-bordered select-sm">
              <option>Last 6 Months</option>
              <option>Last Year</option>
              <option>All Time</option>
            </select>
            <button className="btn btn-sm btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export
            </button>
          </div>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 20,
                left: 0,
                bottom: 10,
              }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#6B7280' }}
                axisLine={{ stroke: '#D1D5DB' }}
                tickMargin={10}
              />
              <YAxis 
                tick={{ fill: '#6B7280' }}
                axisLine={{ stroke: '#D1D5DB' }}
                tickFormatter={(value) => `$${value.toLocaleString()}`}
              />
              <Tooltip 
                contentStyle={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '0.375rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
                formatter={(value) => [`$${value.toLocaleString()}`, value === data.uv ? 'Unique Visitors' : 'Page Views']}
              />
              <Area 
                type="monotone" 
                dataKey="uv" 
                stroke="#6366F1" 
                fillOpacity={1} 
                fill="url(#colorUv)" 
                name="Unique Visitors"
                strokeWidth={2}
              />
              <Area 
                type="monotone" 
                dataKey="pv" 
                stroke="#10B981" 
                fillOpacity={1} 
                fill="url(#colorPv)" 
                name="Page Views"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
              <span className="text-sm text-gray-600">Unique Visitors</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
              <span className="text-sm text-gray-600">Page Views</span>
            </div>
          </div>
          <span className="text-xs text-gray-400">Updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>
    );
  }
}