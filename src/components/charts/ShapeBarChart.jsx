import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const colors = ['#6366F1', '#10B981', '#F59E0B', '#EF4444', '#EC4899', '#8B5CF6'];

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

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function ShapeBarChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Custom Shape Bar Chart</h2>
          <p className="text-sm text-gray-500">Unique triangular bar visualization</p>
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
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#6B7280' }}
              axisLine={{ stroke: '#D1D5DB' }}
            />
            <YAxis 
              tick={{ fill: '#6B7280' }}
              axisLine={{ stroke: '#D1D5DB' }}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <Tooltip 
              contentStyle={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '0.375rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
              formatter={(value) => [value.toLocaleString(), 'Unique Visitors']}
            />
            <Legend 
              wrapperStyle={{
                paddingTop: '20px'
              }}
            />
            <Bar 
              dataKey="uv" 
              name="Unique Visitors"
              shape={<TriangleBar />} 
              label={{ 
                position: 'top', 
                fill: '#6B7280',
                fontSize: 12,
                formatter: (value) => value.toLocaleString()
              }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="flex flex-wrap gap-4">
          {colors.map((color, index) => (
            <div key={color} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-sm mr-2" 
                style={{ backgroundColor: color }}
              ></div>
              <span className="text-sm text-gray-600">{data[index]?.name || `Item ${index + 1}`}</span>
            </div>
          ))}
        </div>
        <span className="text-xs text-gray-400">Updated: {new Date().toLocaleDateString()}</span>
      </div>
    </div>
  );
}