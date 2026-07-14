import React from 'react';

export default function Card({children}) {

    const styles = {
        card: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem',
            borderRadius: '1rem',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            marginBottom: '1rem',
        }
    };

    return (
            <div className = "card" style={styles.card}>
                {children}
            </div>
    )




}