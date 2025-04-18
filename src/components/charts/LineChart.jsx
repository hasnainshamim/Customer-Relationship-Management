import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

export default class LineChartComponent extends PureComponent {
  render() {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Monthly Performance</h2>
          <div className="flex space-x-2">
            <button className="btn btn-xs btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export
            </button>
            <select className="select select-bordered select-xs">
              <option>Last 6 Months</option>
              <option>Last Year</option>
              <option>Custom Range</option>
            </select>
          </div>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 20,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#6b7280' }}
                axisLine={{ stroke: '#d1d5db' }}
              />
              <YAxis 
                tick={{ fill: '#6b7280' }}
                axisLine={{ stroke: '#d1d5db' }}
              />
              <Tooltip 
                contentStyle={{
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Legend 
                wrapperStyle={{
                  paddingTop: '20px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="pv" 
                stroke="#6366f1" 
                strokeWidth={2}
                activeDot={{ r: 6, stroke: '#4338ca', strokeWidth: 2, fill: '#ffffff' }} 
                name="Page Views"
              />
              <Line 
                type="monotone" 
                dataKey="uv" 
                stroke="#10b981" 
                strokeWidth={2}
                activeDot={{ r: 6, stroke: '#059669', strokeWidth: 2, fill: '#ffffff' }} 
                name="Unique Visitors"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-2 text-xs text-gray-500 flex justify-between">
          <span>Data updated 5 mins ago</span>
          <span>Source: Google Analytics</span>
        </div>
      </div>
    );
  }
}