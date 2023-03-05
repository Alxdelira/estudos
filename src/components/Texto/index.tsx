import classNames from 'classnames';
import styles from './Texto.module.scss'

type Props = {
  children?: any;
}
export default function Texto({ children, ...props }: Props) {
  const classes = classNames({
    [styles.texto]: true,
    
  })
  return (
    <div className={styles.container}>
      <p className={classes}{...props}>{children}</p>
    </div>
  )
}