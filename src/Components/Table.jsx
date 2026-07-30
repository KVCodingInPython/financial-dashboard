import "../css/Table.css";

export default function Table({ headers, data }) {
    return (
        <table className="data-table">
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index} scope="col">{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
