import styles from './Card.module.scss';
import clsx from 'clsx';

const Card = props => {
  return (
    <li className={styles.card}>
      {props.title}
      <button><span className='fa fa-star-o' /></button>
    </li>
  );
};

export default Card;