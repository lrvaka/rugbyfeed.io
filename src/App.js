import { useState } from "react";

import Header from "./UI/Header/Header";
import SeasonStandings from "./components/SeasonStandings/SeasonStandings";

function App() {
  const [seasonStandings, setSeasonStandings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchSeasonStandingsHandler(e) {
    setError(null);
    setIsLoading(true);
    setSeasonStandings([]);
    try {
      const response = await fetch(
        `.netlify/functions/fetch-standings?leagueID=${e}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("API key expired");
      }

      //Figures out the length of conferences
      let leagueName = data.results.season.name;
      for (let i = 0; i < data.results.overall.tables.length; i++) {
        //Iterates through each conference, if there is more than 1, appends to state
        let conferenceName = data.results.overall.tables[i].groupname; // Pulls out the conference name
        console.log(conferenceName);
        let transformedStandings = data.results.overall.tables[i].rows.map(
          //Pulls out needed info
          (e) => {
            return {
              league: leagueName,
              conference: conferenceName,
              id: e.team.id,
              icon: e.team.image_id,
              rank: e.pos,
              team: e.team.name,
              record: `${e.win} - ${e.loss}`,
              points: e.points,
              pointsDiff: e.goalDiffTotal,
            };
          }
        );
        console.log(transformedStandings);
        setSeasonStandings((prevStandings) => [
          transformedStandings,
          ...prevStandings,
        ]); // sets season standings, appends new state with previous state, in case there is more
      } // than one conference, etc.
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  return (
    <div className="background">
      <Header />
      <SeasonStandings
        onfetchSeasonStandings={fetchSeasonStandingsHandler}
        data={seasonStandings}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}

export default App;
