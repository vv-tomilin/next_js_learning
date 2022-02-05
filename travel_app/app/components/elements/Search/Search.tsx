import React from 'react';

import styles from './Search.module.scss';

const Search: React.FC = () => {

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  return <div className={styles.search}>
    <span className='material-icons-outlined'>search</span>
    <input
      type="text"
      value={searchTerm}
      placeholder='Search place...'
      onChange={handleSearchTerm} />
  </div>;
};

export default Search;