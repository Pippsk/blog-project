import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Pipp Codes</div>
      <div className={styles.text}>
        Pipp creative thoughts agency All rights reserved
      </div>
    </div>
  );
};

export default Footer;
