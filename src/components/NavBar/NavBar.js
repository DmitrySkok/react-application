import styles from './NavBar.module.scss';
// import Container from '../Container/Container';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <nav className={styles.navBar}>
        <div className={styles.navBarWrapper}>
          <div>
            <NavLink to="/"><span className='fa fa-th-list'></span></NavLink>
          </div>

          <div>
            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink>
          </div>
        </div>
    </nav>
  );
}

export default NavBar;