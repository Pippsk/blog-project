import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger , bolder, braver and better.
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          tempore necessitatibus explicabo? Sit corporis nihil optio quae
          tempora, labore aperiam.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/about.png"
          alt="Agency image"
          fill
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default AboutPage;
