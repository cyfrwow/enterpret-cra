import React from 'react';
import TopicRow from './TopicRow';
import styles from './Topics.module.scss';

function Topics({ topics }) {
    return (
        <ul className={styles.topicsList}>
            {/* {
            topics.map(topic => (
                <TopicRow topic={topic}/>
            )
        } */}
        </ul>
    );
}

export default Topics;
