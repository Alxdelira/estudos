import styles from './Title.module.scss'
import classNames from 'classnames';

type Props = {
  children: any;

}

export function Title({ children, ...props }: Props) {
  const classe = classNames({
    [styles.texto]: true,

  })
  return (
    <div>
      <h1 {...props} className={classe} id="texto">
        
        {children}
      </h1>
    </div>
  );
}


