import { useState } from 'react';

const AddPost = ({ posts, updatePosts, setOption }) => {
  const [postId, setPostId] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  const hasDuplicateId = (id) => {
    const hasDuplicate = posts.some((post) => {
      return post.id == id;
    });
    return hasDuplicate;
  };

  const handleSubmit = () => {
    if (postId < 0 || postId > 1000)
      return alert('Post Ids are capped at minimum 0 and maximum 1000!');

    if (!postId || !postTitle || !postBody)
      return alert('Please fill out all the fields!');

    if (hasDuplicateId(postId)) {
      return alert('Entered id already exists. Try entering a new one!');
    }

    const newPost = [
      ...posts,
      {
        userId: 1,
        id: postId,
        title: postTitle,
        body: postBody,
      },
    ];
    updatePosts(newPost);
    alert('Post created and added successfully!');
    setPostId('');
    setPostTitle('');
    setPostBody('');
    setOption('all');
  };

  return (
    <div>
      <form className="p-6 shadow-md bg-slate-300 rounded-md mt-8 flex mx-auto w-[50%] flex-col gap-3">
        <h3 className=" mb-2 font-medium text-md text-slate-600">
          Enter post details
        </h3>
        <input
          min={0}
          className="rounded-sm"
          type="number"
          value={postId}
          placeholder="Post Id"
          onInput={(e) => {
            setPostId(e.target.value);
          }}
        />
        <input
          maxLength={75}
          className="rounded-sm"
          type="text"
          placeholder="Post Title"
          value={postTitle}
          onInput={(e) => {
            setPostTitle(e.target.value);
          }}
        />
        <textarea
          className=" resize-none"
          type="text"
          rows={5}
          cols={10}
          maxLength={75}
          value={postBody}
          placeholder="Post Body"
          onInput={(e) => {
            setPostBody(e.target.value);
          }}
        />
        <button
          type="button"
          className="px-6 py-2 rounded-sm shadow-md bg-blue-500 hover:bg-blue-600 transition-colors duration-300 inline-block w-max text-white"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddPost;
