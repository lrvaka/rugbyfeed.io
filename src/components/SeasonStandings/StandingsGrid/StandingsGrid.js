import React from "react";
import styles from "./StandingsGrid.module.css";
import StandingsGridItem from "./StandingsGridItem";

export default function StandingsGrid({ data }) {
  return (
    <React.Fragment>
      {data.map((conferences) => {
        return (
          <div key={Math.random()}>
            <h3>{conferences[0].conference}</h3>
            <div className={styles.StandingsGrid}>
              <div className={styles.gridHeading}>
                <h3>#</h3>
                <h3>Team</h3>
                <h3>Record</h3>
                <h3>Points</h3>
                <h3>PointDiff</h3>
              </div>
              {conferences.map((teamInfo) => (
                <div className={styles.standingsRow}>
                  <StandingsGridItem
                    id={teamInfo.id}
                    key={teamInfo.id}
                    rank={teamInfo.rank}
                    team={teamInfo.team}
                    icon={teamInfo.icon}
                    record={teamInfo.record}
                    points={teamInfo.points}
                    pointsDiff={teamInfo.pointsDiff}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
//   return (

// <div className={styles.StandingsGrid}>
//   <h3>Rank</h3>
//   <h3>Team</h3>
//   <h3>Record</h3>
//   <h3>Points</h3>
//   <h3>PointDiff</h3>
//   {
//       data.map((competitions) => (
//     competitions.map((teamInfo) => (
//         <StandingsItem
//       key={teamInfo.key}
//       rank={teamInfo.rank}
//       abb={teamInfo.abb}
//       record={teamInfo.record}
//       points={teamInfo.points}
//       pointsDiff={teamInfo.pointsDiff}
//     />
//     ))
//   ))}
// </div>
//   );
// }
