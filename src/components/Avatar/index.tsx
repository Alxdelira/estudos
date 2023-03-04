import Image from 'next/image';
import styles from './Avatar.module.scss';
import classNames from 'classnames';


type AvatarProps = {
  avatar__image?: boolean;
  small?: boolean;
  big?: boolean;
  children?: string;
  pixel_A: number;
  pixel_L: number;
  urlImage: string;
};

export default function Avatar({ pixel_A, pixel_L, urlImage, children, ...props }: AvatarProps): JSX.Element {
  const classes = classNames({
    [styles.avatar__image]: true,
    [styles.big]: props.big,
    [styles.small]: props.small
  });
  
  return (
    <div className={classes} {...props}>
      <Image
        className={classes}
        src={urlImage}
        width={pixel_L}
        height={pixel_A}
        alt={"Imagem do Usuario - Avatar"}
        {...props}
      />
      {children}
    </div>
  );
}

