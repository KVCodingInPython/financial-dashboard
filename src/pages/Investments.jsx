import React from 'react';
import Card from '../Components/Card.jsx';
import Chart from '../Components/Chart.jsx';
import Table from '../Components/Table.jsx';
import '../css/Investments.css';

export default function CostOptimisation() {

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

	return (
		<>
			<h1>Cost Optimisation</h1>
			<hr className = "section-divider"></hr>
			<Card>
				<div className="optimisation-metrics">
					<h3>Potential Savings: £312</h3>
					<h3>Optimisation Score: 84%</h3>
					<h3>Idle Resources: 5</h3>
					<h3>Reserved Coverage: 62%</h3>
				</div>
			</Card>

			<hr className = "section-divider"></hr>
			<p></p>
			<br></br>

			<Card> 
				<div className= "optimisation-feedback">
					<h2>Recommendations</h2>
					<ul>
						<li>Stop VM</li>
						<li>Resize Database</li>
						<li>Delete Storage</li>
					</ul>
				</div>
			</Card>

			<hr className = "section-divider"></hr>
			<p></p>
			<br></br>

			<Card>
				<div className= "optimisation-chart">
					<h2>Estimated Savings Chart</h2>
					<p></p>
					<br></br>
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
				</div>
			</Card>

			<hr className="section-divider" />
			<Card>
				<div className="resource-utilisation">
					<h2>Resource Utilisation Table</h2>
					<div className="resource-utilisation-table">
						<Table
							headers={[
								"Resource",
								"Type",
								"Utilisation",
								"Status",
								"Recommendation",
							]}
							data={[
								["web-server-01", "Virtual machine", "18%", "Idle", "Stop VM"],
								["orders-db", "Database", "42%", "Underused", "Resize database"],
								["archive-storage", "Storage", "9%", "Idle", "Delete storage"],
								["api-server-02", "Virtual machine", "76%", "Healthy", "No action needed"],
							]}
						/>
					</div>
				</div>
			</Card>
		</>
	);
}
