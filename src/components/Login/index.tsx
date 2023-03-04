import styles from "./Login.module.scss";
import classNames from "classnames";

type Props = {
    children?: string;


}



export default function Login({ children, ...props }: Props): JSX.Element {

    return (

        <form className={styles.form} >
            <div>
                <h1 className={styles.login}>Login</h1>
                <div >
                    <label className={styles.label}{...props}>Usuario{children}</label>
                </div>
                <div>
                    <input className={styles.input} type="text" placeholder="user@exemple.com" />
                </div>
                <div >
                    <label className={styles.label}{...props}>Senha{children}</label>
                </div>
                <div>
                    <input className={styles.input} type="password" />
                </div>
                <div>
                    <a href="#" className={styles.forget}>Esqueceu a senha ?</a>
                    <button className={styles.buton} type="submit">Enviar</button>
                </div>
            </div>
        </form>
    );


}