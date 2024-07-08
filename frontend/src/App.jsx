import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Ideas } from "./components/ideas/Ideas";
import { List } from "./components/list/List";
import { Achievements } from "./components/achievements/Achievements";
import { Challenges } from "./components/challenges/Challenges";
import axios from "axios";

export function App() {
  const [selectedIdeas, setSelectedIdeas] = useState(() => {
    const savedIdeas = JSON.parse(localStorage.getItem("selectedIdeas"));
    return savedIdeas || [];
  });

  const [selectedCompleted, setSelectedCompleted] = useState(() => {
    const savedCompleted = JSON.parse(
      localStorage.getItem("selectedCompleted")
    );
    return savedCompleted || [];
  });

  const handleSelect = (idea) => {
    setSelectedIdeas([...selectedIdeas, idea]);
  };

  const handleSelectCompleted = (challenge) => {
    setSelectedCompleted([...selectedCompleted, challenge]);
    setSelectedIdeas(selectedIdeas.filter((idea) => idea !== challenge));
  };

  const [countByType, setCountByType] = useState({});

  const handleCountByType = useCallback((count) => {
    setCountByType(count);
  }, []);

  const saveData = async () => {
    try {
      await axios.post("backend-api/saveIdeas", selectedIdeas);
      await axios.post("/backend-api/saveChallenges", selectedCompleted);
    } catch (error) {
      console.error(error);
    }
  };

  const loadData = async () => {
    try {
      const responseIdeas = await axios.get("backend-api/loadIdeas");
      const responseChallenges = await axios.get("backend-api/loadChallenges");
      setSelectedIdeas(responseIdeas.data);
      setSelectedCompleted(responseChallenges.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-center gap-x-28 mb-20">
        <button
          onClick={saveData}
          className="py-5 px-10 border-4 border-customgreen rounded-md bg-black font-bold text-customgreen text-base uppercase shadow-sm shadow-white transform transition-transform duration-300 hover:scale-110"
        >
          Save data
        </button>
        <button
          onClick={loadData}
          className="py-5 px-10 border-4 border-customgreen rounded-md bg-black font-bold text-customgreen text-base uppercase shadow-sm shadow-white transform transition-transform duration-300 hover:scale-110"
        >
          Load data
        </button>
      </div>
      <Ideas onSelect={handleSelect} />
      <List
        selectedIdeas={selectedIdeas}
        onSelectCompleted={handleSelectCompleted}
      />
      <Achievements countByType={countByType} />
      <Challenges
        selectedCompleted={selectedCompleted}
        onCountByType={handleCountByType}
      />
    </div>
  );
}
