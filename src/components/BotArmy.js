import React from "react";
import BotCard from "./BotCard";

function BotArmy({ army, onReleaseFromArmy }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onReleaseFromArmy={onReleaseFromArmy}
          // No need to pass `onDelete` here
        />
      ))}
    </div>
  );
}

export default BotArmy;
