import { useState } from 'react';

const EditPost = ({ posts, updatePosts, setOption, postDetail }) => {
  // states to store postId , postTitle and postBody (input field values)
  const [postId, setPostId] = useState(postDetail.id);
  const [postTitle, setPostTitle] = useState(postDetail.title);
  const [postBody, setPostBody] = useState(postDetail.body);

  // runs when user clicks on submit button
  const handleSubmit = () => {
    // if any of the field is left empty, do not let user edit the post
    if (!postTitle || !postBody)
      return alert('Please fill out all the fields!');

    // get the index of the post that is being edited
    const postIndex = posts.findIndex((post) => post.id == postId);

    // overwrite the values of that element with new values
    const updatedPost = posts.slice();
    updatedPost[postIndex].title = postTitle;
    updatedPost[postIndex].body = postBody;

    // update the posts state in the parent component
    updatePosts(updatedPost);
    alert('Post updated successfully!');

    // route to the page that displays table once the post has been updated
    setOption('all');
  };

  return (
    <div>
      <form className="p-6 shadow-md bg-slate-300 rounded-md mt-8 flex mx-auto w-[50%] flex-col gap-3">
        <h3 className=" mb-2 font-medium text-md text-slate-600">
          Enter new post details
        </h3>
        <input
          className="rounded-sm"
          type="text"
          placeholder="Post Title"
          maxLength={75}
          value={postTitle}
          onInput={(e) => {
            // synchronizes the input field values with the state when user inputs anything on the input field
            setPostTitle(e.target.value);
          }}
        />
        <textarea
          className=" resize-none"
          type="text"
          rows={5}
          cols={10}
          maxLength={500}
          value={postBody}
          placeholder="Post Body"
          onInput={(e) => {
            setPostBody(e.target.value);
          }}
        />
        <button
          type="button"
          className="px-6 py-2 rounded-sm shadow-md bg-blue-500 hover:bg-blue-600 transition-colors duration-300 inline-block w-max text-white"
          // call handleSubmit when user clicks on the submit button
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default EditPost;
