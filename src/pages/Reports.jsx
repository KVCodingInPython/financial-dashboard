import React from 'react';
import Card from '../Components/Card.jsx';
import Table from '../Components/Table.jsx';
import '../css/Reports.css';

export default function Reports() {
	return (
		<>
			<h1>Reports</h1>
			<hr className = "section-divider"></hr>
			<Card>
				<div className="reports-content">
					<h3> Monthly Report </h3>
					<hr className = "section-divider"></hr>
						<Card>
							<Table
								headers={[
											"Highest Spending Day",
											"Lowest Spending Day",
											"Average Daily Spend",
										]}
								data={[
										["18 July: £321", "3 July: £121 ", "£162/day"],
									]}
							/>
						</Card>
					<hr className = "section-divider"></hr>
					<h3> Provider Report </h3>
					<hr className = "section-divider"></hr>
							<Card>
								AWS
								<br></br>
								<p> Resources </p>
								<br></br>
								<p> 28 </p>
								<br></br>
								<p> Regions </p>
								<br></br>
								<p> 3 </p>
								<br></br>
								<p> Average Daily Cost</p>
								<br></br>
								<p> £85 </p>
							</Card>
							<Card>
								Azure
								<br></br>
								<p> Resources </p>
								<br></br>
								<p> 12 </p>
								<br></br>
								<p> Subscriptions </p>
								<br></br>
								<p> 2 </p>
								<br></br>
								<p> Average Daily Cost</p>
								<br></br>
								<p> £45 </p>
							</Card>
							<Card>
								Google Cloud
								<br></br>
								<p> £810 </p>
							</Card>
							<Card>
								Total Accounts
								<br></br>
								<p> 4 </p>
							</Card>
					<hr className = "section-divider"></hr>
					<h3> Service Report </h3>
					<hr className = "section-divider"></hr>
					<h3> Security Report </h3>
					<hr className = "section-divider"></hr>
					<h3> Export CSV</h3>
					<hr className = "section-divider"></hr>
					<h3> Export PDF </h3>
					<hr className = "section-divider"></hr>
				</div>
			</Card>
		</>
	);
}
