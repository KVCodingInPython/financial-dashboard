export default function ProfileCard({name, email, profilePicture}) {
    const styles = {
        card: {
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
            borderRadius: '1rem',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'var(--surface)',
            color: 'var(--text)',
            marginBottom: '1rem',
        },
        profilePicture: {
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            marginRight: '1rem',
        }
    };

    return (
        <div style={styles.card}>
            <img src={profilePicture} alt="Profile" style={styles.profilePicture} />
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}