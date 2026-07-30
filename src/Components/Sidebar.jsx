import React from "react";
import "../css/Sidebar.css";
import Chart from "./Chart.jsx";
import Table from "./Table.jsx";

class ChartErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error) {
        console.error(error);
    }

    render() {
        if (this.state.hasError) {
            return <div className="chart-fallback">Chart unavailable right now.</div>;
        }

        return this.props.children;
    }
}

export default function Sidebar() {
    return (
        <>
            <div className="sidebar"> 
                <ul>
                    <li> Total Cloud Spend </li>
                    <li> Active Resources</li>
                    <li> Security Alerts </li>
                    <li> Budget Remaining </li>
                    <li>
                        Cost Graph
                        <ChartErrorBoundary>
                                    <Chart
                                        title="Estimated Monthly Savings"
                                        xKey="month"
                                        yKey="savings"
                                        xAxisLabel="Month"
                                        yAxisLabel="Savings (£)"
                                        data={[
                                                { month: "Jan", savings: 120 },
                                                { month: "Feb", savings: 180 },
                                                { month: "Mar", savings: 150 },
                                                { month: "Apr", savings: 210 },
                                             ]}
                                    />
                        </ChartErrorBoundary>
                    </li>
                    <li className="sidebar-table-card">
                        <div className="sidebar-table-heading">
                            <h2>Recent Billing Activity</h2>
                            <p>Latest cloud charges across your accounts.</p>
                        </div>
                        <div className="sidebar-table-scroll">
                            <Table
                                headers={["Date", "Service", "Account", "Cost", "Status"]}
                                data={[
                                    ["30 Jul", "Compute", "Production", "£184.20", "Processed"],
                                    ["29 Jul", "Database", "Production", "£96.40", "Processed"],
                                    ["28 Jul", "Storage", "Analytics", "£42.18", "Processed"],
                                    ["27 Jul", "Network", "Development", "£18.75", "Processed"],
                                ]}
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </>
        
    )};
