import spinner from './../assets/spinner.gif';

const Loader = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] grid place-items-center">
      <img className=" h-[80px] w-[80px]" src={spinner} alt="Spinner gif" />
    </div>
  );
};
export default Loader;
