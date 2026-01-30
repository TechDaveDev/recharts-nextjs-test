'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { revenueByProductData } from "@/lib/data";
import { ChartContainer } from "../ui/ChartContainer";

export const RevenueBarChart = () => (
  <ChartContainer title="Ingresos por Producto">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={revenueByProductData} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
        <XAxis type="number" stroke="currentColor" fontSize={12} />
        <YAxis type="category" dataKey="name" stroke="currentColor" fontSize={12} width={90} />
        <Tooltip
          cursor={{ fill: 'var(--foreground)', opacity: 0.1 }}
          contentStyle={{
            backgroundColor: 'var(--tooltip-bg)',
            borderColor: 'var(--tooltip-border)',
            color: 'var(--tooltip-text)',
            borderRadius: '12px',
            borderWidth: '1px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(8px)',
            padding: '10px'
          }}
          itemStyle={{
            fontSize: '13px',
            fontWeight: '600',
            color: 'var(--tooltip-text)'
          }}
          labelStyle={{
            color: 'var(--tooltip-text)',
            fontWeight: 'bold',
            marginBottom: '4px'
          }}
        />
        <Bar dataKey="revenue" name="Ingresos" fill="#8884d8" background={{ fill: 'rgba(255, 255, 255, 0.1)' }} />
      </BarChart>
    </ResponsiveContainer>
  </ChartContainer>
);