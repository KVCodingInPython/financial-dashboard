import { Stack, Divider, Typography } from "@mui/material";

export default function TransactionCard({ transaction }) {
    if (!transaction) return null;

    return (
        <Stack
            spacing={1}
            sx={{
                p: 2,
                border: "1px solid #ccc",
                borderRadius: 2,
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                backgroundColor: 'var(--surface)',
                color: 'var(--text)',
                width: "100%",
                boxSizing: "border-box",
            }}
        >
            <Typography variant="h6" fontWeight="bold">
                {transaction.description}
            </Typography>

            <Divider />

            <Stack direction="row" justifyContent="space-between">
                <Typography fontWeight="bold">Amount: &nbsp; </Typography>
                <Typography> £{transaction.amount}</Typography>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
                <Typography fontWeight="bold">Date: &nbsp; </Typography>
                <Typography>{transaction.date}</Typography>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
                <Typography fontWeight="bold">Category: &nbsp; </Typography>
                <Typography>{transaction.category}</Typography>
            </Stack>
        </Stack>
    );
}