import React from "react";
import styles from "./StandingsGrid.module.css";
import StandingsItem from "./StandingsItem";

export default function StandingsGrid({ data }) {
  return (
    <div className={styles.StandingsGrid}>
      <h3>Rank</h3>
      <h3>Team</h3>
      <h3>Record</h3>
      <h3>Points</h3>
      <h3>PointDiff</h3>
      {
          data.map((e) => (
        <StandingsItem
          key={e.key}
          rank={e.rank}
          abb={e.abb}
          record={e.record}
          points={e.points}
          pointsDiff={e.pointsDiff}
        />
      ))}
    </div>
  );
}
