import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Ayu Lestari</div>
      <div className={styles.text}>©Test 2024.</div>
    </div>
  );
};

export default Footer;