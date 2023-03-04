import styles from './Social.module.scss';

export function Tecnologias() {

    return (
        <>
            <div className={styles.container} >
                <div className={styles.tecno}>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" />
                </div>
                <div className={styles.redes}>
                    <a href="https://www.facebook.com/alexandredelira/"><img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" /></a>
                    <a href="https://instagram.com/alx_delira"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" /></a>
                    <a href="https://www.linkedin.com/in/alxdelira"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
                    <a href="https://twitter.com/Alxdelira"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" /></a>
                    <a href="https://gitlab.fslab.dev/Alexandre"><img src="https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white" /></a>
                </div>
            </div>
        </>
    );
}


