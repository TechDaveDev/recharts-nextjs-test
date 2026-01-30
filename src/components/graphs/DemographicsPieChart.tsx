'use client';

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { userDemographicsData } from "@/lib/data";
import { ChartContainer } from "../ui/ChartContainer";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const DemographicsPieChart = () => (
  <ChartContainer title="Demografía de Usuarios">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart margin={{ top: 20, right: 30, left: 30, bottom: 20 }}>
        <Pie
          data={userDemographicsData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ percent }) => `${((percent as number) * 100).toFixed(0)}%`}
          fontSize={12}
        >
          {userDemographicsData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          verticalAlign="bottom"
          height={36}
          wrapperStyle={{
            color: 'var(--tooltip-text)',
            paddingTop: '20px'
          }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'var(--tooltip-bg)',
            borderColor: 'var(--tooltip-border)',
            color: 'var(--tooltip-text)',
            borderRadius: '12px',
            borderWidth: '1px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(8px)',
            padding: '12px',
          }}
          itemStyle={{
            color: 'var(--tooltip-text)',
            fontSize: '13px',
            fontWeight: '500',
          }}
          labelStyle={{
            color: 'var(--tooltip-text)',
            fontWeight: 'bold',
            marginBottom: '4px',
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  </ChartContainer>
);