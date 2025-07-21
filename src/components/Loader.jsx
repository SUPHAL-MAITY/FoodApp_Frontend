const Loader = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-20 w-full m-4">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <h1 className="text-red-500"> It is on the free server , so it might take some time  for first time </h1>
      </div>
    </>
  );
};

export default Loader;

