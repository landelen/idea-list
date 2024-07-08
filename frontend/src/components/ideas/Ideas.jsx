import { useEffect, useState } from "react";
import axios from "axios";

export function Ideas({ onSelect }) {
  const [ideasData, setIdeasData] = useState([]);

  useEffect(() => {
    fetchIdeas();
  }, []);

  const fetchIdeas = async () => {
    try {
      const newIdeas = [];
      for (let i = 0; i < 4; i++) {
        const response = await axios.get("/bored-api");
        const data = response.data;
        const formattedIdea = {
          type: data.type,
          activity: data.activity,
        };
        newIdeas.push(formattedIdea);
      }

      setIdeasData(newIdeas);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async (idea) => {
    onSelect(idea);
    setIdeasData((prevIdeasData) => prevIdeasData.filter((i) => i !== idea));
    try {
      const response = await axios.get("/bored-api");
      const data = response.data;
      const newIdea = {
        type: data.type,
        activity: data.activity,
      };

      setIdeasData((prevIdeasData) => [...prevIdeasData, newIdea]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mb-16">
      <h1 className="my-10 text-white font-bold text-3xl uppercase">
        Choose fresh ideas to do
      </h1>
      <div className="flex justify-between mb-10">
        {ideasData.map((idea, index) => {
          return (
            <div
              key={index}
              className="w-52 max-w-52 h-64 p-10 bg-customgray rounded-lg cursor-pointer shadow-md shadow-white transform transition-transform duration-300 hover:scale-105"
              onClick={() => handleClick(idea)}
            >
              <p className="font-bold uppercase mb-16 text-customgreen">
                {idea.type}
              </p>
              <p className="text-white text-sm">{idea.activity}</p>
            </div>
          );
        })}
      </div>
      <hr className="bg-white h-1" />
    </div>
  );
}
