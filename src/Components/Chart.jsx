import { AgCharts } from "ag-charts-react";

export default function Chart({
  data,
  xKey,
  yKey,
  title,
  xAxisLabel = xKey,
  yAxisLabel = yKey,
  height = "260px",
}) {
  const chartOptions = {
    data,
    background: { fill: "transparent" },

    title: {
      text: title,
    },

    series: [
      {
        type: "line",
        xKey: xKey,
        yKey: yKey,
        yName: yAxisLabel,
        stroke: "#2563eb",
        strokeWidth: 3,
        marker: {
          enabled: true,
          size: 7,
        },
      },
    ],

    axes: [
      {
        type: "category",
        position: "bottom",
        title: { text: xAxisLabel },
      },
      {
        type: "number",
        position: "left",
        title: { text: yAxisLabel },
      },
    ],

    legend: { enabled: false },
  };

  return (
    <div className="chart-shell">
      <AgCharts options={chartOptions} style={{ width: "100%", height }} />
    </div>
  );
}




         


