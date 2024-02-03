import Image from "next/image";
import styles from "./SinglePostPage.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

//FETCH DATA WITH API

const getSinglePost = async (slug) => {
  const res = await fetch(`http://localhost:3000/blog/${slug}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const data = await res.json();
  return data;
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.description,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  //FETCH DATA WITH API
  const post = await getSinglePost(slug);

  //FETCH DATA WITHOUT API

  // const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imageContainer}>
          <Image src={post.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailvalue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.description}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
