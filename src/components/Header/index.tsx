import styles from './Header.module.scss';
import classNames from 'classnames';

type HeaderProps = {
  children: string;
  bar?: boolean;
  texto?: boolean;
};

export default function Header({ children, ...props }: HeaderProps) {
  const classes = classNames({
    [styles.bar]: props.bar,

  });

  return (
    <>
      <header className={classes} {...props}>  
        {children}
      </header>
    </>
  );
}

