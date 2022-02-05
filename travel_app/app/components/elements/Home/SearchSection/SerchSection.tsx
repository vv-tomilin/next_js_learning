import React from 'react';

import Filters from '../../Filters/Filters';
import Search from '../../Search/Search';

import styles from './SerchSection.module.scss';

const SerchSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div>
        <h1>best places for trip</h1>
        <Search />
        <Filters />
      </div>
    </section>
  );
};

export default SerchSection;
