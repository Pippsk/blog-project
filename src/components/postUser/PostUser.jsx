import { getUser } from "@/lib/data";
import styles from "./PostUser.module.css";
import Image from "next/image";

//FETCH DATA WITH API

// const getUser = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   const data = await res.json();
//   return data;
// };

const PostUser = async ({ userId }) => {
  //FETCH DATA WITH API
  // const user = await getUser(userId);

  //FETHC DATA WITHOUT API

  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      {user.img && (
        <Image
          src={user.img ? user.img : "/noavatar.png"}
          alt=""
          width={50}
          height={50}
          className={styles.avatar}
        />
      )}
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
