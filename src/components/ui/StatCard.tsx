import { StatCardProps } from "@/infrastructure/interfaces/Interfaces";
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

export const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeType, icon: Icon }) => {
  const isIncrease = changeType === 'increase';
  const changeColor = isIncrease ? 'text-green-500' : 'text-red-500';
  const ChangeIcon = isIncrease ? ArrowUpRight : ArrowDownRight;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
        <Icon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
        <div className="flex items-center text-xs mt-1">
          <span className={`${changeColor} flex items-center`}>
            <ChangeIcon className="h-3 w-3 mr-1" />
            {change}
          </span>
          <span className="text-gray-500 dark:text-gray-400 ml-1">desde el mes pasado</span>
        </div>
      </div>
    </div>
  );
};