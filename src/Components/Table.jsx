export default function Table({ headers, data }) {
    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '1rem',
    };

    const thStyle = {
        border: '1px solid #ddd',
        padding: '0.5rem',
        textAlign: 'left',
        backgroundColor: '#f2f2f2',
    };

    const tdStyle = {
        border: '1px solid #ddd',
        padding: '0.5rem',
    };

    return (
        <table style={tableStyle}>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index} style={thStyle}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} style={tdStyle}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}