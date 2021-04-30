import styles from "./StandingsGridItem.module.css"

export default function StandingsGridItem({rank, team, record, points, pointsDiff}){
    return(
        <div className={styles.StandingsGridItem}>
        <p>{rank}</p>
        <p>{team}</p>
        <p>{record}</p>
        <p>{points}</p>
        <p>{pointsDiff}</p>
        </div>
    )
}