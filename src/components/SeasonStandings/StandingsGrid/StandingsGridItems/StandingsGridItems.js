import StandingsGridItem from "./StandingsGridItem/StandingsGridItem";

export default function StandingsGridItems({ data }) {
  return (
    <div>
        {data.map(e => (
            <div>{e.rank}</div>
        ))}
    </div>
  );
}
