import '../css/Transactions.css';
import React from "react";

import TransactionCard from "../Components/TransactionCard.jsx";

const transactions = [
	{
		description: "AWS bill",
		amount: '2310',
		date: "2026-07-14",
		category: "Cloud",
	},
];




export default function Transactions() {
	return (
		<>
			<h1>Transactions</h1>
			{transactions.map((transaction, index) => (
				<TransactionCard key={index} transaction={transaction} />
			))}
		</>
	);
}
