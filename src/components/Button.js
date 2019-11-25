import React from "react";

const Button = props => {
    return (
        <div style={styles.button}>{props.title}</div>
    )
}
export default Button;

const styles = {
    button: {
        display: 'flex',
        backgroundColor: '#2CA64E',
        padding: 14,
        width: 65,
        color: '#fff',
        borderRadius: 10
    },
}