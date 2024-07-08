import { useEffect } from "react";

export function Challenges({ selectedCompleted, onCountByType }) {
  useEffect(() => {
    localStorage.setItem(
      "selectedCompleted",
      JSON.stringify(selectedCompleted)
    );

    const countByType = selectedCompleted.reduce((acc, challenge) => {
      acc[challenge.type] = (acc[challenge.type] || 0) + 1;
      return acc;
    }, {});

    onCountByType(countByType);
  }, [selectedCompleted, onCountByType]);

  return (
    <div className="mb-48">
      <h1 className="my-10 text-white font-bold text-3xl uppercase">
        Completed
      </h1>
      {selectedCompleted.map((challenge, index) => {
        return (
          <div>
            <div
              key={index}
              className="flex flex-col justify-center gap-1 bg-customgray mb-2 p-2 rounded-md border-4 border-white"
            >
              <p className="text-customgreen uppercase">{challenge.type}</p>
              <p className="text-white">{challenge.activity}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
