'use client';

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartContainer } from "../ui/ChartContainer";
import { salesData } from "@/lib/data";

export const SalesLineChart = () => (
  <ChartContainer title="Resumen de Ventas">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={salesData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
        <XAxis dataKey="name" stroke="currentColor" fontSize={12} />
        <YAxis stroke="currentColor" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(31, 41, 55, 0.8)',
            borderColor: 'rgba(55, 65, 81, 1)',
            color: '#ffffff'
          }}
        />
        <Legend />
        <Line type="monotone" dataKey="ventas" stroke="#3b82f6" strokeWidth={2} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="ingresos" stroke="#84cc16" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </ChartContainer>
);