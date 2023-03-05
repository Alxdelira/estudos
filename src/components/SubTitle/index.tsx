import styles from './SubTitle.module.scss'
import classNames from 'classnames';

type Props = {
  children: any;
  secondary?: boolean;

}

export function SubTitle({ children, ...props }: Props) {
  const classe = classNames({
    [styles.texto]: true,
    

  })
  return (
    <h2 {...props} className={classe} id="texto">
      {children}
    </h2>
  );
}