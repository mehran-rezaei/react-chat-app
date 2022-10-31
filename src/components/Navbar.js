import React from 'react';
// styles
import styles from "./Navbar.module.css"
const Navbar = (props) => {
    const {logOutHandler} = props
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                Botogram
            </div>
            <div className={styles.logout} onClick={logOutHandler}>
                   Logout
            </div>
        </div>
    );
};
export default Navbar;