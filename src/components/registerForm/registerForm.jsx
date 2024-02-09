"use client";
import { useFormState } from "react-dom";

import styles from "./registerForm.module.css";
import { register } from "@/lib/actions";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Username" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="passwordRepeat" />
      <input type="password" placeholder="PasswordRepeat" name="password" />

      <button>Register</button>

      {state?.error}
      <Link href="/login">
        Have an acocunt? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
