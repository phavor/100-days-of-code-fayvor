const Post = require("../../schema/post.schema");

const postResolverMutations = {
  addPost: async (_, { data }, { user }) => {
    console.log(data);
    const newPost = await Post.create({
      title: data.title,
      body: data.body
    });

    console.log(newPost);

    return newPost;
  },

  updatePost: async (_, { data }, { user }) => {
    const updatedPost = await Post.updateOne(
      { _id: data.id },
      {
        body: data.body
      }
    );

    return updatedPost;
  }
}

module.exports = postResolverMutations