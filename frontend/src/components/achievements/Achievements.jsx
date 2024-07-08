export function Achievements({ countByType }) {
  return (
    <div className="mb-16">
      <h1 className="my-10 text-white font-bold text-3xl uppercase">
        Achievements
      </h1>
      <div className="flex justify-center mb-10">
        {Object.entries(countByType).map(([type, count], index) => (
          <div
            key={index}
            className="flex flex-col w-1/5 justify-center items-center"
          >
            <div className="w-20 h-20 mb-5 border-4 border-customgreen rounded-full flex justify-center items-center text-customgreen font-bold text-lg">
              {count}
            </div>
            <p className="text-center text-white uppercase">{type}</p>
          </div>
        ))}
      </div>
      <hr className="bg-white h-1" />
    </div>
  );
}
