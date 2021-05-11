import styles from "./SeasonStandings.module.css";
import Container from "../../UI/Container/Container";
import StandingsGrid from "./StandingsGrid/StandingsGrid";
import SelectLeague from "./SelectLeague/SelectLeague";

export default function SeasonStandings({ data, onfetchSeasonStandings }) {
  let league = data.map((e) => e)[0];

  return (
    <Container>
      <div className={styles.SeasonStandings}>
        <SelectLeague onSelectLeague={onfetchSeasonStandings} />
        <h2>{league ? league[0].league : null}</h2>
        <StandingsGrid data={data} />
      </div>
    </Container>
  );
}
