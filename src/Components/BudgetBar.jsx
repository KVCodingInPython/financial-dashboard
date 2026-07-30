export default function BudgetBar({ currentSpend, budgetLimit }) {
    const percentage = Math.min((currentSpend / budgetLimit) * 100, 100);
    const barStyle = {
        width: `${percentage}%`,
        backgroundColor: percentage < 50 ? 'green' : percentage < 80 ? 'orange' : 'red',
        transition: 'width 0.5s ease-in-out',
    };

    return (
        <div className="budget-bar-track" aria-label={`${percentage}% of budget spent`}>
            <div className="budget-bar-fill" style={barStyle} />
        </div>
    );
}
