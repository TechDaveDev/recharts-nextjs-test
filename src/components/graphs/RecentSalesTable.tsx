import { recentSalesData } from "@/lib/data";

export const RecentSalesTable = () => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Ventas Recientes</h3>
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Cliente</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">Monto</th>
          </tr>
        </thead>
        <tbody>
          {recentSalesData.map((sale) => (
            <tr key={sale.id} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{sale.name}</td>
              <td className="px-6 py-4">{sale.email}</td>
              <td className="px-6 py-4 font-semibold">{sale.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);