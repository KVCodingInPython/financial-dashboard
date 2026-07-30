import { useMemo, useState } from 'react';
import { Box, InputAdornment, TextField } from '@mui/material';
import Card from '../Components/Card.jsx';
import Table from '../Components/Table.jsx'; 
import Bar from '../Components/BudgetBar.jsx';
import Notification from '../Components/Notification.jsx';
import '../css/Budget.css';

const notifications = [
	{
		title: 'Low Budget',
		message: 'You are approaching your budget limit.',
		type: 'warning',
	},
	{
		title: 'Underused service',
		message: 'orders-db is using less than half of its allocated budget.',
		type: 'info',
	},
];

export default function Budget() {
	 const [searchTerm, setSearchTerm] = useState("");
	
		const displayedNotifications = useMemo(() => {
			const query = searchTerm.trim().toLowerCase();
	
			if (!query) {
				return notifications.slice(0, 12);
			}
	
			return notifications.filter((notification) =>
				[notification.title, notification.message, notification.type]
					.join(" ")
					.toLowerCase()
					.includes(query)
			);
		}, [searchTerm]);
	
	return (
		<>
			<h1>Budget</h1>
			<hr className="section-divider"></hr>
			<Card>
				<div className="budget-card-content">
					<div className = "budget-content">
						<h3> Budget Remaining: £1,200</h3>
						<h3> Spent this month: £800</h3>
						<h3> Forecast: £1,000</h3>
						<h3> Alert Status: Low</h3>
					</div>

					<hr className = "section-divider"></hr>
					<div className = "budget-bar">
						<h3> Progress Bar </h3>
						<Bar currentSpend={800} budgetLimit={2000} />
					</div>
					<hr className = "section-divider"></hr>
					<div className = "budget-table">
						<h3> Budget by Service</h3>
						<Table
							headers={[
										"Service Name",
										"Budget Amount (£)",
										"Utilisation",
										"Status",
										"Recommendation",
									]}
							data={[
									["web-server-01", "1,200", "18%", "Idle", "Stop VM"],
									["orders-db", "800", "42%", "Underused", "Resize database"],
									["archive-storage", "500", "9%", "Idle", "Delete storage"],
									["api-server-02", "1,500", "76%", "Healthy", "No action needed"],
								]}
						/>

						
					</div>
					<hr className = "section-divider"></hr>
					<div className = "budget-alerts">
						<h3> Alerts </h3>
						<TextField
                        label="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        size = "small"
						sx = {{ width: 200, alignSelf: "flex-start"}}
						InputProps = {{
							startAdornment: (
								<InputAdornment position = "start">🔍</InputAdornment>
							),
						}}
                    />

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
                            gap: 2,
                        }}
                    >
                        {displayedNotifications.map((notification) => (
                            <Notification
                                key={`${notification.title}-${notification.message}`}
                                title={notification.title}
                                message={notification.message}
                                type={notification.type}
                            />
                        ))}
                    </Box>
					</div>

				</div>
			</Card>
		</>
	);
}
