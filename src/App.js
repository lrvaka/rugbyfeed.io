import { useState } from "react";

import Header from "./UI/Header/Header";
import SeasonStandings from "./components/SeasonStandings/SeasonStandings";

function App() {
  const [seasonStandings, setSeasonStandings] = useState([]);

  async function fetchSeasonStandingsHandler(e) {
    setSeasonStandings([]);

    const response = await fetch(
      `.netlify/functions/fetch-standings/${e}`
    );
    console.log(response);
    const data = await response.json();
    console.log(data);

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
  }

  return (
    <div className="background">
      <Header />
      <SeasonStandings
        onfetchSeasonStandings={fetchSeasonStandingsHandler}
        data={seasonStandings}
      />
    </div>
  );
}

export default App;
