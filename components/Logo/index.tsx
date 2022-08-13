/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

import styles from './logo.module.css';

const Logo = () => {
  return (
    <h1 className="flex items-end">
      <Link href="/">
        <a className={styles.logo}>blind</a>
      </Link>
      <em className={styles.topic}>Topic</em>
    </h1>
  );
};

export default Logo;
