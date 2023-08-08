import { useState } from 'react';
import Home from './Home';
import Posts from './Posts';

const Index = () => {
  // useState is a react hook that is used to achieve reactivity
  // this hook triggers UI rerender whenever the state changes
  const [route, setRoute] = useState('home');
  return (
    <>
      <div>
        {/* The select-none, flex, w-full,.... are the utility classes provided by tailwind CSS that serves
        a specific purpose. Tailwind allows you to write styles directly inside the classes using these utility
        classes */}
        <nav className="top-nav select-none flex justify-between w-full py-5 px-6">
          <h3
            onClick={() => {
              // Since posts are fetched whenever the home component is mounted, prompt user if they really
              // want to move to home as routing to home will refresh the table data
              const ans = confirm(
                'Are you sure to route to homepage ? Your posts table will be refreshed!'
              );
              // If use clicks cancel, do not route
              if (!ans) return;

              // else set the new route as home
              setRoute('home');
            }}
            className="font-semibold cursor-pointer flex items-center gap-2 text-lg tracking-wider text-white hover:text-slate-300 transition-colors duration-300"
          >
            {/* This span element is used to render the home icon from google's material design icons
            library. In order to use this syntax, either you need to npm install the library or include its CDN
            (Content Delivery Network) link in root html file. In this case, CDN method has been used */}
            <span className="material-symbols-outlined mb-[4px]">home</span>
            HOME
          </h3>
          <h3
            onClick={() => {
              setRoute('posts');
            }}
            className="font-semibold flex items-center gap-2 cursor-pointer text-lg  tracking-wider text-white hover:text-slate-300 transition-colors duration-300"
          >
            POSTS
            <span className="material-symbols-outlined mb-[3px]">mail</span>
          </h3>
        </nav>
      </div>
      {/* if the route state is set to 'home', render the home component else render the posts component */}
      {route === 'home' ? <Home /> : <Posts />}
    </>
  );
};
export default Index;
