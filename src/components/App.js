import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import BotArmy from "./BotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('/api/fetchData')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const addToArmy = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const deleteBotFromCollection = (botId) => {
    fetch(`/api/fetchData/${botId}`, {
      method: "DELETE"
    }).then(() => {
      setBots(bots.filter((bot) => bot.id !== botId));
      setArmy(army.filter((b) => b.id !== botId));
    });
  };

  return (
    <div className="App">
      <BotArmy
        army={army}
        onReleaseFromArmy={releaseFromArmy}
        onDelete={deleteBotFromCollection}
      />
      <BotCollection
        bots={bots}
        onAddToArmy={addToArmy}
        onDelete={deleteBotFromCollection}
      />
    </div>
  );
}

export default App;
