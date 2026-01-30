'use client';

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { salesData } from "@/lib/data";
import { ChartContainer } from "../ui/ChartContainer";

export const SalesLineChart = () => (
  <ChartContainer title="Resumen de Ventas">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={salesData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="var(--grid-color)"
          vertical={true}
          horizontal={true}
        />
        <XAxis dataKey="name" stroke="currentColor" fontSize={12} />
        <YAxis stroke="currentColor" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'var(--tooltip-bg)',
            borderColor: 'var(--tooltip-border)',
            color: 'var(--tooltip-text)',
            borderRadius: '12px',
            borderWidth: '1px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(4px)',
            padding: '10px'
          }}
          itemStyle={{
            fontSize: '13px',
            fontWeight: '600',
            paddingTop: '2px',
            paddingBottom: '2px'
          }}
          labelStyle={{
            color: 'var(--tooltip-text)',
            fontWeight: 'bold',
            marginBottom: '4px'
          }}
          cursor={{ stroke: 'var(--foreground)', strokeWidth: 1, strokeDasharray: '4 4' }}
        />
        <Legend />
        <Line type="monotone" dataKey="ventas" name="Ventas" stroke="#3b82f6" strokeWidth={2} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="ingresos" name="Ingresos" stroke="#84cc16" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </ChartContainer>
);