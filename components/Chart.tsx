"use client";

import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Supported chart types
 */
export type ChartType = "bar" | "line" | "pie";

/**
 * Data point structure for single dataset
 */
export interface DataPoint {
  name: string;
  [key: string]: string | number;
}

/**
 * Supported input data formats
 */
export type ChartData = DataPoint[] | Record<string, DataPoint[]>;

/**
 * Additional chart configuration options
 */
export interface ChartOptions {
  title?: {
    display?: boolean;
    text?: string;
  };
  colors?: string[];
  showGrid?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  xAxisLabel?: string;
  yAxisLabel?: string;
}

/**
 * Props interface for the DynamicChart component
 */
export interface DynamicChartProps {
  data: ChartData;
  chartType?: ChartType;
  options?: ChartOptions;
  className?: string;
}

/**
 * Default chart configuration
 */
const DEFAULT_OPTIONS: ChartOptions = {
  title: { display: false },
  colors: ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#0088FE"],
  showGrid: true,
  showTooltip: true,
  showLegend: true,
};

/**
 * Normalizes and prepares multi-dataset input for rendering
 * @param data Input chart data
 * @returns Normalized data array with combined datasets
 */
function normalizeData(data: ChartData): DataPoint[] {
  // If already an array, return as-is
  if (Array.isArray(data)) return data;

  // For multi-dataset, combine datasets while preserving individual series
  const combinedData: Record<string, DataPoint> = {};

  Object.entries(data).forEach(([seriesName, dataset]) => {
    dataset.forEach((point) => {
      if (!combinedData[point.name]) {
        combinedData[point.name] = { name: point.name };
      }
      combinedData[point.name][seriesName] = point.value;
    });
  });

  return Object.values(combinedData);
}

/**
 * Dynamic Chart Component
 * Renders different chart types based on input
 */
export default function Chart({
  data,
  chartType = "bar",
  options = {},
  className,
}: DynamicChartProps) {
  // Merge default and provided options with a fallback for colors
  const chartOptions: ChartOptions = {
    ...DEFAULT_OPTIONS,
    ...options,
    colors: options.colors || DEFAULT_OPTIONS.colors,
  };

  // Normalize input data
  const normalizedData = useMemo(() => normalizeData(data), [data]);

  // Validate data
  if (!normalizedData || normalizedData.length === 0) {
    return (
      <Card
        className={`w-full h-[300px] flex items-center justify-center ${className}`}
      >
        <CardContent className="text-center text-muted-foreground">
          No data available
        </CardContent>
      </Card>
    );
  }

  // Get the series names (excluding 'name')
  const seriesNames = Object.keys(normalizedData[0]).filter(
    (key) => key !== "name",
  );

  // Render appropriate chart type
  const renderChart = () => {
    // Ensure colors is always an array
    const colors = chartOptions.colors!;

    switch (chartType) {
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={normalizedData}>
              {chartOptions.showGrid && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis dataKey="name" label={chartOptions.xAxisLabel} />
              <YAxis label={chartOptions.yAxisLabel} />
              {chartOptions.showTooltip && <Tooltip />}
              {chartOptions.showLegend && <Legend />}
              {seriesNames.map((seriesName, index) => (
                <Bar
                  key={seriesName}
                  dataKey={seriesName}
                  fill={colors[index % colors.length]}
                  name={seriesName}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        );

      case "line":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={normalizedData}>
              {chartOptions.showGrid && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis dataKey="name" label={chartOptions.xAxisLabel} />
              <YAxis label={chartOptions.yAxisLabel} />
              {chartOptions.showTooltip && <Tooltip />}
              {chartOptions.showLegend && <Legend />}
                {seriesNames.map((seriesName, index) => (
                <Line
                  key={seriesName}
                  type="monotone"
                  dataKey={seriesName}
                  stroke={colors[index % colors.length]}
                  name={seriesName}
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 8 }}
                  style={{
                  filter: "drop-shadow(0 5px 15% rgba(0, 0, 255, 0.5))",
                  }}
                />
                ))}
            </LineChart>
          </ResponsiveContainer>
        );

      case "pie":
        // Note: Pie chart is less suitable for multiple series
        // It will use the first series by default
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              {chartOptions.showTooltip && <Tooltip />}
              {chartOptions.showLegend && <Legend />}
              <Pie
                data={normalizedData}
                dataKey={seriesNames[0]}
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill={colors[0]}
                label
              >
                {normalizedData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        );

      default:
        return (
          <Card
            className={`w-full h-[300px] flex items-center justify-center ${className}`}
          >
            <CardContent className="text-center text-muted-foreground">
              Unsupported chart type: {chartType}
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <Card className={className}>
      {chartOptions.title?.display && chartOptions.title.text && (
        <div className="text-center font-semibold py-2 text-lg">
          {chartOptions.title.text}
        </div>
      )}
      <CardContent>{renderChart()}</CardContent>
    </Card>
  );
}

// Export types for external use
export { Chart };
