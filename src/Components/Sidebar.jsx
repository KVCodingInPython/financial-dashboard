import React from "react";
import "../Sidebar.css";
import Chart from "./Chart.jsx";

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
                            <Chart />
                        </ChartErrorBoundary>
                    </li>
                    <li> Recent Billing Activity</li>
                </ul>
            </div>
        </>
        
    )};