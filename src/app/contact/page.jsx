import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: " Contact Page",
  description: "Contact Description",
};

const ContactPage = () => {
  console.log("it works here");
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/contact.png" alt="" fill className={styles.image} />
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Phone number" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
