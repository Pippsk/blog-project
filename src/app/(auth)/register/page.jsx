import { register } from "@/lib/actions";
import styles from "./register.module.css";
const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={register}>
          <input type="text" placeholder="Username" name="username" />
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="passwordRepeat" />
          <input type="password" placeholder="PasswordRepeat" name="password" />

          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
