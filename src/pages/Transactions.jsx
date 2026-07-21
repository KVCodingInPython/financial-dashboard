import React, { useMemo, useState } from "react";
import { Card, CardContent, Typography, Box, TextField, Stack, InputAdornment, } from "@mui/material";
import TransactionCard from "../Components/TransactionCard.jsx";

const transactions = [
    { description: "AWS bill", amount: "2310", date: "2026-07-14", category: "Cloud" },
    { description: "Azure bill", amount: "2310", date: "2026-07-14", category: "Cloud" },
    { description: "Google Cloud bill", amount: "2310", date: "2026-07-14", category: "Cloud" },
    { description: "IBM Cloud bill", amount: "2310", date: "2026-07-14", category: "Cloud" },
    // ...more transactions
];

export default function Transactions() {
    const [searchTerm, setSearchTerm] = useState("");

    const displayedTransactions = useMemo(() => {
        const query = searchTerm.trim().toLowerCase();

        if (!query) {
            return transactions.slice(0, 12);
        }

        return transactions.filter((transaction) =>
            [transaction.description, transaction.amount, transaction.date, transaction.category]
                .join(" ")
                .toLowerCase()
                .includes(query)
        );
    }, [searchTerm]);

    return (
        <Card 
			variant="outlined" 
			sx={{ p: 2, borderRadius: 3, boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)" }}>
            <CardContent>
                <Stack spacing={2}>
                    <Typography variant="h5" fontWeight="bold">
                        Transactions
                    </Typography>

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
                            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                            gap: 2,
                        }}
                    >
                        {displayedTransactions.map((transaction) => (
                            <TransactionCard
                                key={`${transaction.description}-${transaction.date}`}
                                transaction={transaction}
                            />
                        ))}
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
}