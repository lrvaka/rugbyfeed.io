import React from "react";
import styles from "./StandingsGrid.module.css";
import StandingsGridItems from "./StandingsGridItems/StandingsGridItems";

export default function StandingsGrid({ data }) {
  console.log(data);
  return (
    <div className={styles.StandingsGrid}>
      <h4>Rank</h4>
      <h4>Team</h4>
      <h4>Record</h4>
      <h4>Points</h4>
      <h4>PointDiff</h4>
      {data.map((e) => (
        <React.Fragment>
          <h1>{e.rank}</h1>
          <h1>{e.team}</h1>
          <h1>{e.record}</h1>
          <h1>{e.points}</h1>
          <h1>{e.pointsDiff}</h1>
        </React.Fragment>
      ))}
    </div>
  );
}
