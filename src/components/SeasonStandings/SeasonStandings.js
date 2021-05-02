import styles from "./SeasonStandings.module.css";
import Container from "../../UI/Container/Container";
import StandingsGrid from "./StandingsGrid/StandingsGrid";

export default function SeasonStandings({ data,  onfetchSeasonStandings}) {
  console.log(data);
  return (
    <Container>
      <div className={styles.SeasonStandings}>
        <h1>Major League Rugby</h1>
        <h2>Season Standings</h2>
        <button onClick={onfetchSeasonStandings}>Get standings</button>
        <StandingsGrid data={data} />
      </div>
    </Container>
  );
}
