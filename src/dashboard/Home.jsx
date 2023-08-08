const Home = () => {
  // simple home component that has a background image and some texts written on it
  // background has been applied using css in the index.css file
  return (
    <div className="homepage min-h-[calc(100vh-80px)] px-6 pt-[100px]">
      <h2 className=" text-center font-semibold text-md text-white">
        Welcome to Posts application using Vite, React, TailwindCSS and JSON
        Placeholder API
      </h2>
      <h2 className="text-center font-normal text-sm mt-4 text-white">
        Click on Posts to explore more post related options
      </h2>
    </div>
  );
};
export default Home;
