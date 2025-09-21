'use client';

import { Cell, Pie, PieChart, PieLabelRenderProps, ResponsiveContainer, Tooltip } from "recharts";
import { ChartContainer } from "../ui/ChartContainer";
import { userDemographicsData } from "@/lib/data";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

type CustomLabelProps = {
  name: string;
  percent: number;
};

const renderCustomizedLabel = (props: PieLabelRenderProps) => {
  const { name, percent } = props as unknown as CustomLabelProps;
  if (name === undefined || percent === undefined) {
    return null;
  }
  return `${name} ${(percent * 100).toFixed(0)}%`;
};

export const DemographicsPieChart = () => (
  <ChartContainer title="Demografía de Usuarios">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={userDemographicsData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={renderCustomizedLabel}
          fontSize={12}
        >
          {userDemographicsData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(31, 41, 55, 0.8)',
            borderColor: 'rgba(55, 65, 81, 1)',
            color: '#ffffff'
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  </ChartContainer>
);