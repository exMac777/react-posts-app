// import the useEffect and useState hooks
import { useEffect, useState } from 'react';

// Loading animation/gif to display when loading
import Loader from '../../components/loader';

// since ViewPost component receives viewPostDetail function as a prop, it is right away destructured
// to make it usable in this component (if not understood, watch videos on destructuring syntax in JS)
const ViewPost = ({
  isLoading,
  posts,
  viewPostDetail,
  updatePosts,
  editPostDetail,
}) => {
  // function to delete individual posts
  const deletePost = (id) => {
    const answer = window.confirm('Are you sure you want to delete this post?');
    if (!answer) return;
    const newPosts = posts.filter((post) => {
      return post.id !== id;
    });
    updatePosts(newPosts);
    window.alert('Post deleted successfully!');
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="mt-[2em]">
          <table className="w-full posts-table">
            <thead>
              <tr className="bg-blue-500">
                <th>S.N.</th>
                <th>Post Title</th>
                <th colSpan={3} className=" text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => {
                return (
                  <tr key={post.id}>
                    <td className="">{index + 1}</td>
                    <td className=" first-letter:capitalize">{post.title}</td>
                    <td className="view text-center">
                      <button
                        onClick={() => {
                          // view post detail of that particular post whose 'view' button has been clicked
                          viewPostDetail(post);
                        }}
                        type="button"
                        title="view"
                        className=" cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px] text-blue-700 text-md">
                          visibility
                        </span>
                      </button>
                    </td>
                    <td className="edit">
                      {/* edit post details on click */}
                      <button
                        onClick={() => {
                          editPostDetail(post);
                        }}
                        type="button"
                        title="edit"
                        className=" cursor-pointer"
                      >
                        <span className="material-symbols-outlined ml-2 mr-[-5px] text-[18px] text-orange-600">
                          edit
                        </span>
                      </button>
                    </td>

                    {/* delete post on click */}
                    <td className="delete">
                      <button
                        onClick={() => {
                          deletePost(post.id);
                        }}
                        type="button"
                        title="delete"
                        className=" cursor-pointer"
                      >
                        <span className="material-symbols-outlined  text-[18px] text-red-500">
                          delete
                        </span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default ViewPost;
