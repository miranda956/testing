import React from "react";

function BotCard({ bot, onAddToArmy, onReleaseFromArmy, onDelete }) {
  return (
    <div className="bot-card">
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>{bot.catchphrase}</p>
      {onAddToArmy && (
        <button onClick={() => onAddToArmy(bot)}>Enlist Bot</button>
      )}
      {onReleaseFromArmy && (
        <button onClick={() => onReleaseFromArmy(bot)}>Release Bot</button>
      )}
      {onDelete && (
        <button onClick={() => onDelete(bot.id)}>Discharge Bot</button>
      )}
    </div>
  );
}

export default BotCard;
