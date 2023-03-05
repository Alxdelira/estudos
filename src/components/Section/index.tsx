import styles from './Section.module.scss'
import classNames from 'classnames'
type Props = {
  children?: any;
}

export default function ({ children, ...porps }: Props): JSX.Element {
  return (
    <>
      {children}
    </>
  );
}