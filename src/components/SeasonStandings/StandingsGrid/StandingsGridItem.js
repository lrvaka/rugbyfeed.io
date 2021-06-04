import React from "react";
import styles from './StandingsGridItem.module.css';

export default function StandingsGridItem({
  rank,
  team,
  record,
  points,
  pointsDiff,
  icon,
}) {
  return (
    <React.Fragment>
      <h2>{rank}</h2>
      {<img className={styles.icon}
        alt={`${team}`}
        src={`https://assets.betsapi.com/images/team/b/${icon}.png`}
      />}
      <h2>{record}</h2>
      <h2>{points}</h2>
      <h2>{pointsDiff}</h2>
    </React.Fragment>
  );
}
