import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { x: 100, y: 200, z: 200, category: 'Group A' },
  { x: 120, y: 100, z: 260, category: 'Group A' },
  { x: 170, y: 300, z: 400, category: 'Group B' },
  { x: 140, y: 250, z: 280, category: 'Group B' },
  { x: 150, y: 400, z: 500, category: 'Group C' },
  { x: 110, y: 280, z: 200, category: 'Group C' },
];

const COLORS = ['#6366F1', '#10B981', '#F59E0B', '#EF4444', '#EC4899'];

export default class ScatterChartComponent extends PureComponent {
  render() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Data Correlation Analysis</h2>
            <p className="text-sm text-gray-500">Relationship between variables</p>
          </div>
          <div className="flex space-x-2">
            <select className="select select-bordered select-sm">
              <option>All Groups</option>
              <option>Group A</option>
              <option>Group B</option>
              <option>Group C</option>
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
            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                type="number" 
                dataKey="x" 
                name="X Value" 
                unit="units" 
                tick={{ fill: '#6B7280' }}
                axisLine={{ stroke: '#D1D5DB' }}
              />
              <YAxis 
                type="number" 
                dataKey="y" 
                name="Y Value" 
                unit="units" 
                tick={{ fill: '#6B7280' }}
                axisLine={{ stroke: '#D1D5DB' }}
              />
              <ZAxis 
                type="number" 
                dataKey="z" 
                range={[60, 400]} 
                name="Size" 
              />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                contentStyle={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '0.375rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
                formatter={(value, name, props) => [
                  value,
                  name === 'Size' ? 'Size' : name === 'X Value' ? 'X' : 'Y',
                  props.payload.category && `Group: ${props.payload.category}`
                ]}
              />
              <Legend />
              {Array.from(new Set(data.map(item => item.category))).map((category, index) => (
                <Scatter 
                  key={category}
                  name={category}
                  data={data.filter(item => item.category === category)}
                  fill={COLORS[index % COLORS.length]}
                  shape="circle"
                />
              ))}
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="flex flex-wrap gap-4">
            {Array.from(new Set(data.map(item => item.category))).map((category, index) => (
              <div key={category} className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></div>
                <span className="text-sm text-gray-600">{category}</span>
              </div>
            ))}
          </div>
          <span className="text-xs text-gray-400">Updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>
    );
  }
}