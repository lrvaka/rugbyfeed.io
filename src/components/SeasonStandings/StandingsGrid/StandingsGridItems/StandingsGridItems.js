import StandingsGridItem from "./StandingsGridItem/StandingsGridItem";

export default function StandingsGridItems({ data }) {
  return (
    <div>
      {data.map((e) => (
        <StandingsGridItem
          rank={e.rank}
          team={e.team}
          record={e.record}
          points={e.points}
          pointsDiff={e.pointsDiff}
        />
      ))}
    </div>
  );
}
