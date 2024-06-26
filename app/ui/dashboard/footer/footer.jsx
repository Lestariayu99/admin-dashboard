import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Ayu Lestari</div>
      <div className={styles.text}>©Technical Test Front-End Developer (React) 2024</div>
    </div>
  );
};

export default Footer;