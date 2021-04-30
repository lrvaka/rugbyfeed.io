import Header from "./UI/Header/Header";
import SeasonStandings from "./components/SeasonStandings/SeasonStandings";

const SEASON_STANDINGS = [{
    rank: 1,
    team: "TOR",
    record: "3-3",
    points: 15,
    pointsDiff: 58,
  },
  {
    rank: 2,
    team: "RUG",
    record: "3-3",
    points: 15,
    pointsDiff: 17,
  },
  {
    rank: 3,
    team: "RUG",
    record: "3-2",
    points: 15,
    pointsDiff: -43,
  },
  {
    rank: 4,
    team: "NOL",
    record: "2-2",
    points: 14,
    pointsDiff: 11,
  },
  {
    rank: 5,
    team: "OLD",
    record: "2-2",
    points: 12,
    pointsDiff: -5,
  },
  {
    rank: 6,
    team: "NEW",
    record: "2-3",
    points: 11,
    pointsDiff: 4,
  },
];

function App() {
  return (
    <div className="background">
      <Header />
      <SeasonStandings data={SEASON_STANDINGS} />
    </div>
  );
}

export default App;
