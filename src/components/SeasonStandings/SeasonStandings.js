import styles from "./SeasonStandings.module.css";
import Container from "../../UI/Container/Container";
import StandingsGrid from "./StandingsGrid/StandingsGrid";

export default function SeasonStandings({data}) {
    console.log(data);
  return (
    <Container>
      <div className={styles.SeasonStandings}>
        <h1>Season Standings</h1>
        <h2>Major League Rugby</h2>
        <StandingsGrid data={data}/>
      </div>
    </Container>
  );
}
