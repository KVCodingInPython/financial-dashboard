export default function Button({
    text,
    onClick,
    type = "button",
    className = "",
}) {
    const buttonStyle = {
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        borderRadius: '0.5rem',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: 'var(--surface)',
        color: 'var(--text)',
        transition: 'background-color 0.3s ease-in-out',
    };

    return (
        <button
            style={buttonStyle}
            onClick={onClick}
            type={type}
            className={className}
        >
            {text}
        </button>
    );
}