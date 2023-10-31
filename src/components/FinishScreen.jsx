import React from "react";

export default function FinishScreen({ points, totalPoints, highscore }) {
  const percentage = Math.ceil((points / totalPoints) * 100);
  let emoji;

  if (percentage === 100) emoji = "🏅";
  else if (percentage >= 80 && percentage < 100) emoji = "🎉";
  else if (percentage >= 50 && percentage < 80) emoji = "🙂";
  else if (percentage < 50) emoji = "🤔";
  else emoji = "😔";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {totalPoints} ({percentage} %)
      </p>
      <p className="highscore">highscore: {highscore} points</p>
    </>
  );
}
