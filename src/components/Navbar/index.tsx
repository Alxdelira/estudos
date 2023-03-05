import styles from './Navbar.module.scss';
import Link from '@/components/Link';

type NavbarProps = {
  children?: any;
}

export default function Navbar({ children, ...props }: NavbarProps) {
  return (
    <nav className={styles.navbar} {...props}>
      <ul className={styles.navbar__list}>
        {children}
      </ul>
    </nav>
  );
};

