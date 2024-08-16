import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onAddToArmy, onDelete }) {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onAddToArmy={onAddToArmy}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default BotCollection;
