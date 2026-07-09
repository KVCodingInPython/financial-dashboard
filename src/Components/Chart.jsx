import { AgCharts } from "ag-charts-react";

const chartOptions = {
	data: [
		{ month: "Jan", budget: 1200 },
		{ month: "Feb", budget: 1800 },
		{ month: "Mar", budget: 1500 },
		{ month: "Apr", budget: 2100 },
		{ month: "May", budget: 2400 },
		{ month: "Jun", budget: 2200 },
	],
	background: { fill: "transparent" },
	title: {
		text: "Monthly Budget",
	},
	subtitle: {
		text: "A quick view of budget movement",
	},
	series: [
		{
			type: "line",
			xKey: "month",
			yKey: "budget",
			yName: "Budget amount",
			stroke: "#2563eb",
			strokeWidth: 3,
			marker: {
				enabled: true,
				size: 7,
				fill: "#ffffff",
				stroke: "#2563eb",
				strokeWidth: 2,
			},
            label: {
                enabled: true,
                fontSize: 12,
                fontWeight: "bold",
                color: "#2563eb",
            },
            xAxis: {
                label: {
                    enabled: true,
                    text: "Months",
                    fontSize: 12,
                    fontWeight: "bold",
                    color: "#2563eb",
                }
            },
            yAxis: {
                label: {
                    enabled: true,
                    text: "Budget",
                    fontSize: 12,
                    fontWeight: "bold",
                    color: "#2563eb",
                }
            }
		},
	],
	axes: [
		{
			type: "category",
			position: "bottom",
			gridLine: { enabled: true },
		},
		{
			type: "number",
			position: "left",
			nice: true,
		},
	],
	legend: {
		enabled: false,
	},
	padding: {
		top: 8,
		right: 8,
		bottom: 8,
		left: 8,
	},
};

export default function Chart() {
	return (
		<div className="chart-shell">
			<AgCharts options={chartOptions} style={{ width: "100%", height: "260px" }} />
		</div>
	);
}




         


