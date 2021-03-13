import React from 'react';
import cx from 'classnames';
import ProgressBar from '../shared/ProgressBar';
import ProgressChart from '../shared/ProgressChart';
import Topics from './Topics';
import styles from './PulseRow.module.scss';

function PulseRow({ theme }) {
    return (
        <ul key={theme.name} className={styles.list}>
            {Object.entries(theme).map(([key, value]) => {
                console.log(key, value);
                return (
                    <li key={key} className={cx(styles.item, { [styles.hide]: key === 'topics' })}>
                        {key === 'sentiment' ? (
                            <ProgressBar />
                        ) : key === 'sentiment_history' ? (
                            <ProgressChart />
                        ) : key === 'topics' ? (
                            <Topics topics={value} />
                        ) : (
                            String(value)
                        )}
                    </li>
                );
            })}
        </ul>
    );
}

export default PulseRow;
