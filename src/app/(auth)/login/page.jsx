import { handleGithubLogin, login } from "@/lib/actions";

const LoginPage = async () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login With GitHub</button>
      </form>

      <form action={login}>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button>Login with credentials</button>
      </form>
    </div>
  );
};

export default LoginPage;
