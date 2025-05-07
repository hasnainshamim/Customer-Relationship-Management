import React from 'react'
import {
    BarChart, Bar,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
const Performance = ({ sizer }) => {
    // console.log('sizer',sizer)
    // Sample data for charts
    const performanceData = [
        { name: 'John', deals: 14, rank: 1 },
        { name: 'Sarah', deals: 8, rank: 2 },
        { name: 'Mike', deals: 6, rank: 3 },
        { name: 'Emma', deals: 5, rank: 4 },
    ];
    return (
        <>

            {/* Top Performers */}
            <div className={`bg-white p-4 rounded-lg shadow lg:col-span-${sizer}`}>
                <h3 className="text-lg font-semibold mb-4">Top Performers</h3>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={performanceData}
                            layout="vertical"
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" width={80} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="deals" fill="#8884d8" name="Deals Closed" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </>
    )
}

export default Performance