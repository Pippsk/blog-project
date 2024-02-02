import PostCard from "@/components/postCard/PostCard";
import styles from "./blogPage.module.css";
import { getPosts } from "@/lib/data";

// FETCH DATA WITH API

// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   const data = await res.json();
//   return data;
// };
const BlogPage = async () => {
  // FETCH DATA WITH API
  // const posts = await getData();

  //FETCH DATA WITHOUT API
  const posts = await getPosts();
  console.log(posts);
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
