import React from 'react';
import styles from './NotFoundBlock.module.scss';

console.log(styles);

const NotFoundBlock: React.FC = () => {
  return <div className={styles.root}>
  <h1> Ничего не найдено :( <br />
  такой страницы у нас нет</h1></div>;
}

export default NotFoundBlock;
