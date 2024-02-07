"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const AddPost = async (formData) => {
  //   const title = formData.get("title");
  //   const description = formData.get("description");
  //   const slug = formData.get("slug");

  const { title, description, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      description,
      slug,
      userId,
    });
    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const DeletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut("github");
};

export const register = async (formData) => {
  const { username, email, password, image, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return "Password does not match";
  }

  try {
    connectToDb();
    const user = User.findOne({ username });
    if (user) {
      return "Username Already exists";
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      image,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
