import styles from './Title.module.scss'
import classNames from 'classnames';

type Props = {
  children: any;
  secondary?: boolean;

}

export function Title({ children, ...props }: Props) {
  const classe = classNames({
    [styles.texto]: true,
    [styles.secondary]: props.secondary,

  })
  return (
    <h1 {...props} className={classe} id="texto">
      {children}
    </h1>
  );
}


