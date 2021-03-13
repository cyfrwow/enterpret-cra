import React from 'react';
import { themes } from '../data/themes';
import PulseRow from '../components/pulse/PulseRow';
import styles from './Pulse.module.scss';

function Pulse() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <ul className={styles.list}>
                    <li className={styles.item}>Themes</li>
                    <li className={styles.item}>Sentiment</li>
                    <li className={styles.item}>Net Sentiment</li>
                    <li className={styles.item}># of Mentions</li>
                    <li className={styles.item}>Weight</li>
                    <li className={styles.item}>Sentiment History</li>
                    <li className={styles.item}>
                        <i className="fa fa-caret-up"></i>
                    </li>
                </ul>
            </header>
            <section className={styles.section}>
                {themes.map((theme, index) => (
                    <PulseRow key={index} theme={theme} />
                ))}
            </section>
        </div>
    );
}

export default Pulse;
