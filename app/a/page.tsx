import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Chart from "@/components/Chart";

// Sample data for demonstration
const monthlyRevenue = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
];

const financialData = {
    Income: [
        { name: 'Jan', value: 5000 },
        { name: 'Feb', value: 4500 },
        { name: 'Mar', value: 6000 },
        { name: 'Apr', value: 5500 },
        { name: 'May', value: 7000 },
        { name: 'Jun', value: 6500 },
    ],
    Expenses: [
        { name: 'Jan', value: 2000 },
        { name: 'Feb', value: 2500 },
        { name: 'Mar', value: 3000 },
        { name: 'Apr', value: 2800 },
        { name: 'May', value: 3200 },
        { name: 'Jun', value: 3100 },
    ],
    Fees: [
        { name: 'Jan', value: 500 },
        { name: 'Feb', value: 500 },
        { name: 'Mar', value: 600 },
        { name: 'Apr', value: 550 },
        { name: 'May', value: 700 },
        { name: 'Jun', value: 6500 },
    ],
};

export default function Dashboard() {
  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Monthly Revenue Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart 
              data={monthlyRevenue} 
              chartType="line"
              options={{
                title: { 
                  display: true, 
                  text: 'Monthly Revenue' 
                },
                xAxisLabel: 'Month',
                yAxisLabel: 'Revenue ($)'
              }}
            />
          </CardContent>
        </Card>

        {/* Product Sales Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Product Sales Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart 
              data={financialData} 
              chartType="line"
              options={{
                title: { 
                  display: true, 
                  text: 'Sales by Product Category' 
                },
                colors: ['#0088FE', '#00C49F', '#FFBB28']
              }}
            />
          </CardContent>
        </Card>
      </div>

      {/* Product Sales Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Product Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <Chart 
            data={[
              ...financialData.Income,
              ...financialData.Expenses
            ]} 
            chartType="line"
            options={{
              title: { 
                display: true, 
                text: 'Sales by Product' 
              },
              colors: ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#0088FE']
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}