import Image from "next/image";
import styles from "./SinglePostPage.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.unsplash.com/photo-1705660416189-132f67752e17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className={styles.image}
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.unsplash.com/photo-1705660416189-132f67752e17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailvalue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailvalue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus cumque provident ullam quas iusto ipsum! Quidem,
          doloribus tenetur, velit est mollitia dolorum tempore, libero ratione
          iste voluptatum accusantium itaque rerum.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
