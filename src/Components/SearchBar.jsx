export default function SearchBar({ value, onChange, placeholder }) {
    const searchBarStyle = {
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        borderRadius: '0.5rem',
        border: '1px solid #ccc',
        width: '100%',
        boxSizing: 'border-box',
    };

    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={searchBarStyle}
        />
    );
}