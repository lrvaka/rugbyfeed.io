import styles from "./StandingsGrid.module.css";
import StandingsGridItems from "./StandingsGridItems/StandingsGridItems";

export default function StandingsGrid({data}) {
console.log(data);
  return (
    <div className={styles.StandingsGrid}>
    <StandingsGridItems data={data}/>
    </div>
  );
}
