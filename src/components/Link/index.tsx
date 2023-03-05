import styles from './Link.module.scss';

type NavbarProps = {
  children?: any;
  page?: string ;
}

export default function Link  ({ page,children,  ...props }: NavbarProps):JSX.Element {
  return (
    <li className={styles.navbar__item}>
      <a href={page} className={styles.navbar__link} {...props}>
        {children}
      </a>
    </li>
  );
};