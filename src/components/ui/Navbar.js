import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <NavLink exact={true} className={styles.navLink} to="/" activeClassName={styles.selected}>
                    <i className="fa fa-heart"></i> Pulse
                </NavLink>
                <NavLink className={styles.navLink} to="/metrics" activeClassName={styles.selected}>
                    <i className="fa fa-chart-line"></i> Metrics
                </NavLink>
                <NavLink className={styles.navLink} to="/feedback" activeClassName={styles.selected}>
                    <i className="fa fa-search"></i> Feedback
                </NavLink>
                <NavLink className={styles.navLink} to="/impact" activeClassName={styles.selected}>
                    <i className="fa fa-bars"></i> Impact <span>beta</span>
                </NavLink>
            </div>
            <div className={styles.right}>
                <span>
                    <i className="fa fa-th-large"></i>
                </span>
                <span>
                    <i className="fa fa-bell"></i>
                </span>
                <span>
                    <i className="fa fa-id-badge"></i>
                </span>
            </div>
        </nav>
    );
}

export default Navbar;
