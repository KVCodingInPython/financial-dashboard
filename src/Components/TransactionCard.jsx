import {Stack, Divider, Typography} from '@mui/material';

export default function TransactionCard({ transaction }) {
    if (!transaction) return null;
    
    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '0.5rem',
        padding: '1rem',
        marginBottom: '1rem',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    };

    return (
        <div style={cardStyle}>
                 <Stack
            spacing={1}
            sx={{
                p: 2,
                border: "1px solid #ccc",
                borderRadius: 2,
                width: 300
            }}
        >
            <Typography variant="h6" fontWeight="bold">
                {transaction.description}
            </Typography>

            <Divider />

            <Stack direction="row" justifyContent="space-between">
                <Typography fontWeight="bold">Amount: </Typography>
                <Typography> £{transaction.amount}</Typography>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
                <Typography fontWeight="bold">Date: </Typography>
                <Typography>{transaction.date}</Typography>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
                <Typography fontWeight="bold">Category: </Typography>
                <Typography>{transaction.category}</Typography>
            </Stack>
        </Stack>
  
        </div>
    );
}