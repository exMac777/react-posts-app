import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from '../../components/loader';

const PostDetail = ({ postDetail, imgUrl }) => {
  const { id, title, body } = postDetail;
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // function to fetch comments from the api
    const fetchComments = async () => {
      // since the api return comments of posts with post id ranging from 1 to 100, if the postId is greater than 100
      // select a random id from 1 to 100 and render comments of that post id
      if (id > 100) {
        const randomId = Math.floor(Math.random() * 100);
        console.log(randomId);
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${randomId}`
        );
        setComments(data);
        setIsLoading(false);
      } else {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        );
        setComments(data);
        setIsLoading(false);
      }
    };
    fetchComments();
  }, []);
  return (
    <div className=" bg-slate-200 text-slate-700 shadow-md w-[60%] mx-auto">
      <div className="img-container w-full aspect-video">
        <img
          src={imgUrl}
          alt="Beautiful landscape"
          className="w-full h-ful object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className=" first-letter:capitalize font-medium text-xl">
          {title}
        </h2>
        <h2 className="post-body mt-1 text-sm text-slate-600 first-letter:capitalize">
          {body}
        </h2>
        <div className="mt-5">
          <h3 className="text-lg font-medium">Comments</h3>

          {isLoading && <Loader className=" w-[50px] h-[50px]" />}
          {!isLoading && (
            <div className=" mt-5 comments-container flex flex-col gap-5">
              {comments.map((comment) => {
                return (
                  <div key={comment.id} className="flex gap-5">
                    <span className="material-symbols-outlined inline-block p-1 rounded-[50%] self-start bg-slate-300">
                      person
                    </span>
                    <div className="comment-info">
                      <h4 className=" font-semibold text-[15px]">
                        {comment.email}
                      </h4>
                      <h4 className=" first-letter:capitalize text-slate-600 text-sm">
                        {comment.body}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default PostDetail;
