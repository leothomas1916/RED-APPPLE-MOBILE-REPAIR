import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Screen Repairs', value: 450 },
  { name: 'Battery', value: 300 },
  { name: 'Back Glass', value: 150 },
  { name: 'Water Damage', value: 80 },
];

const COLORS = ['#DC2626', '#EA580C', '#4B5563', '#2563EB'];

const StatsChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Common Repairs We Fix</h3>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />
            <Legend verticalAlign="bottom" height={36}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm text-gray-500 mt-2 text-center">Based on last month's service requests</p>
    </div>
  );
};

export default StatsChart;