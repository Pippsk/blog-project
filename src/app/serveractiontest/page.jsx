import { AddPost, DeletePost } from "@/lib/actions";

const ServerActionTestPage = () => {
  return (
    <div>
      <form action={AddPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="description" name="description" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button>Create Post</button>
      </form>

      <form action={DeletePost}>
        <input type="text" placeholder="postId" name="id" />
        <button>Delete</button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
