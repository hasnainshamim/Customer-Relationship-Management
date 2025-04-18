import React, { PureComponent } from 'react';
import { useLocation } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Deal A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Deal B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Deal C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Deal D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Deal E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Deal F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Deal G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default class BarChartExample extends PureComponent {
    render() {
        return (
            <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Deals</h2>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" name="Page Views" />
                            <Bar dataKey="uv" fill="#82ca9d" name="Unique Visitors" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                    Data for the last 7 days
                </div>
            </div>
        );
    }
}