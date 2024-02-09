"use client";
import { useFormState } from "react-dom";

import styles from "./loginForm.module.css";
import { login } from "@/lib/actions";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  //   useEffect(() => {
  //     state?.success && router.push("/login");
  //   }, [state?.success, router]);
  return (
    <form className={styles.form} action={formAction}>
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="passwordRepeat" />

      <button>Login</button>

      {state?.error}
      <Link href="/register">
        Do not have an acocunt? <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
