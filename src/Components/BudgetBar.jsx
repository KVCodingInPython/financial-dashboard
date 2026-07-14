export default function budgetBar ({currentSpend, budgetLimit}) {
    const percentage = (currentSpend / budgetLimit) * 100;
    const barStyle = {
        width: `${percentage}%`,
        height: '100%',
        backgroundColor: percentage < 50 ? 'green' : percentage < 80 ? 'orange' : 'red',
        transition: 'width 0.5s ease-in-out',
    };

    return (
        <div style = {barStyle}> </div>
        
    )


};