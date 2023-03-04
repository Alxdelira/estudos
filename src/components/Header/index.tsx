import styles from './Header.module.scss';

type Props = {
  children?: any;
  bar?: boolean;
 

};

export default function Header({ children, ...props }: Props): JSX.Element {


  return (

    <div className={styles.bar} {...props}>
      <h1>Alexandre Nogueira de Lira</h1>
      {children}
    </div>

  );
}

