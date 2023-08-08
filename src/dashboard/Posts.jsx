import { useState, useEffect } from 'react';
import ViewPost from './Posts/ViewPost';
import AddPost from './Posts/AddPost';
import EditPost from './Posts/EditPost';
import PostDetail from './Posts/PostDetail';
import axios from 'axios';

const Posts = () => {
  // state to replicate router functionalities that renders content based on the option provided
  // initially set to list all the posts in a tabular format
  const [option, setOption] = useState('all');

  // state to store post detail to be passed as props to the Post Detail component
  // initialized as empty object
  const [postDetail, setPostDetail] = useState({});

  // state to store the loading state when data is being fetched from the API
  // if true, will display a loading animation
  // initially true, changes to false as soon as fetching completes
  const [isLoading, setIsLoading] = useState(true);

  // this state will store all the posts that has been fetched from the api
  const [posts, setPosts] = useState([]);

  // function to change the display mode of the posts (listing all posts / viewing individual post details / adding a new post)
  const changeOption = (option) => {
    setOption(option);
  };

  // function that will be passed as a prop to the child component so that function log runs in parent
  // whenever child calls this function

  // specifically for the edit functionality
  const editPostDetail = (post) => {
    setPostDetail(post);
    changeOption('edit');
  };

  // for the view functionality
  const viewPostDetail = (post) => {
    setPostDetail(post);
    changeOption('view');
  };

  // function to update posts state when a post is edited or new post is added
  const updatePosts = (newPosts) => {
    setPosts(newPosts);
  };
  // useEffect is another type of that contains a callback function which is executed every time the listed dependencies change
  // since we have passed empty array as our dependency array, it will run only once when the component is
  // first mounted to the DOM
  useEffect(() => {
    // you can use primitive .then .catch syntax but using async-await makes it easier to write asynchronous code
    //  and also the code looks visually appealing and is easy to understand
    const postFetcher = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );

      // response object contains a property named data that has all the posts data
      // setPosts is used to store all the retrieved posts data inside of the posts state
      setPosts(response.data);

      // change loading to false when fetch operation is complete
      setIsLoading(false);
    };
    postFetcher();
  }, []);

  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-100 px-6 py-8">
      <div className=" flex gap-4 first-letter mb-5">
        <button
          onClick={() => {
            changeOption('all');
          }}
          type="button"
          className="px-3 py-2 font-medium text-white bg-green-600 hover:bg-green-700  transition-colors duration-600 rounded-[5px] shadow-md"
        >
          Posts
        </button>
        <button
          onClick={() => {
            changeOption('add');
          }}
          type="button"
          className="px-3 py-2 text-white font-medium bg-blue-500  hover:bg-blue-600  transition-colors duration-600 rounded-[5px] shadow-md"
        >
          Add Posts
        </button>
      </div>
      <div>
        {/* if option is 'all', show ViewPost component */}
        {option === 'all' && (
          <ViewPost
            editPostDetail={editPostDetail}
            viewPostDetail={viewPostDetail}
            posts={posts}
            isLoading={isLoading}
            updatePosts={updatePosts}
          />
        )}

        {/* if option is 'add', show AddPost component */}
        {option === 'add' && (
          <AddPost
            posts={posts}
            updatePosts={updatePosts}
            setOption={setOption}
          />
        )}

        {/* if option is 'edit', show EditPost component */}
        {option === 'edit' && (
          <EditPost
            posts={posts}
            updatePosts={updatePosts}
            setOption={setOption}
            postDetail={postDetail}
          />
        )}

        {/* if option is 'view', show PostDetail component */}
        {option === 'view' && (
          <PostDetail
            postDetail={postDetail}
            // This url gives a random image every time it is hit
            imgUrl="https://picsum.photos/1920/1080"
          />
        )}
      </div>
    </div>
  );
};
export default Posts;
