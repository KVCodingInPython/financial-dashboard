import React from 'react';

export default function Notification({ title, message, type ='info', onClose  }) {
    const styles = {
        container: {
            padding: '1.2rem',
            borderRadius: '2rem', 
            border: '1px solid',
            marginBottom: '1.5rem',
            width: '100%',
            boxSizing: 'border-box',
            backgroundColor:
                type === 'success' ? '#e8f5e9' :
                type === 'error' ? '#ffebee' :
                type === 'warning' ? '#fff8e1' :
                '#e3f2fd',
            borderColor:
                type === 'success' ? '#66bb6a' :
                type === 'error' ? '#ef5350' :
                type === 'warning' ? '#ffca28' :
                '#42a5f5',
        },
        title: { margin: 0, fontSize: '1rem', fontWeight: 'bold' },
        message: { margin: '0.8rem 0 0', fontSize: '0.95rem' },
        button: {
            marginTop: '1rem',
            padding: '0.8rem 0.8rem',
            border: 'none',
            borderRadius: '0.5rem',
            curosr: 'pointer',
        },
    };

    return (
        <>
            <div style = {styles.container}>
                <h3 style = {styles.title}>{title}</h3>
                <p style = {styles.message}>{message}</p>
                {onClose && (
                <button style = {styles.button} onClick={onClose}>
                    Close
                </button>
                )}


            </div>
        </>
    );

};






