import { useState } from 'react';

const AddPost = ({ posts, updatePosts, setOption }) => {
  // states to store the input fields' data
  // whenever user types something in the input fields, the values wil be store in these states
  // this is achieved using the onInput event in the respective input fields
  const [postId, setPostId] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  // to check if the input id of the new post already exists in our posts
  // duplicate id must be prevented to keep each post element unique
  const hasDuplicateId = (id) => {
    const hasDuplicate = posts.some((post) => {
      return post.id == id;
    });
    return hasDuplicate;
  };

  // function that runs when user clicks on submit
  const handleSubmit = () => {
    // checks if whether the entered user id is in negative or more than 1000
    if (postId < 0 || postId > 1000)
      return alert('Post Ids are capped at minimum 0 and maximum 1000!');

    // checks if any input field is left empty when submitted
    if (!postId || !postTitle || !postBody)
      return alert('Please fill out all the fields!');

    // function call to check duplicate ids
    if (hasDuplicateId(postId)) {
      return alert('Entered id already exists. Try entering a new one!');
    }

    // create new post array by spreading the previous posts and then adding the newly created one
    // ... is called spread operator that spreads all the values of the attached operand
    const newPost = [
      ...posts,
      {
        userId: 1,
        id: postId,
        title: postTitle,
        body: postBody,
      },
    ];

    // function call to update the post in parent component
    updatePosts(newPost);
    alert('Post created and added successfully!');

    // clear input fields once the post has been created
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
          // to map the state with the input field
          value={postId}
          placeholder="Post Id"
          onInput={(e) => {
            // change the state when user inputs any value in the input fields
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
          // call handleSubmit function when user clicks on submit
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddPost;
