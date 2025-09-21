'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartContainer } from "../ui/ChartContainer";
import { revenueByProductData } from "@/lib/data";

export const RevenueBarChart = () => (
  <ChartContainer title="Ingresos por Producto">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={revenueByProductData} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
        <XAxis type="number" stroke="currentColor" fontSize={12} />
        <YAxis type="category" dataKey="name" stroke="currentColor" fontSize={12} width={80} />
        <Tooltip
          cursor={{ fill: 'rgba(107, 114, 128, 0.1)' }}
          contentStyle={{
            backgroundColor: 'rgba(31, 41, 55, 0.8)',
            borderColor: 'rgba(55, 65, 81, 1)',
            color: '#ffffff'
          }}
        />
        <Bar dataKey="revenue" fill="#8884d8" background={{ fill: 'rgba(255, 255, 255, 0.1)' }} />
      </BarChart>
    </ResponsiveContainer>
  </ChartContainer>
);