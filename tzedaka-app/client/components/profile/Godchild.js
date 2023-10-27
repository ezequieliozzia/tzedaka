const Godchild = (props) => {
  return (
    <div className="flex flex-col items-center justify-center dark:bg-gray-900 dark:text-gray-100 w-3/12 m-5">
      <>
        <h4 className="text-lg font-semibold mt-5">{props.name}</h4>
      </>
      <>
        <button className="text-indigo-500 mb-5">Ver más</button>
      </>
    </div>
  );
};

export default Godchild;
