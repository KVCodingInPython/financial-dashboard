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
            <h3>{transaction.description}</h3>
            <p>Amount: ${transaction.amount}</p>
            <p>Date: {transaction.date}</p>
            <p>Category: {transaction.category}</p>
        </div>
    );
}