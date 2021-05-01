import React from 'react';

export default function StandingsItem({rank, abb, record, points, pointsDiff}){
    return(
        <React.Fragment>
            <h4>{rank}</h4>
            <h4>{abb}</h4>
            <h4>{record}</h4>
            <h4>{points}</h4>
            <h4>{pointsDiff}</h4>
        </React.Fragment>
    )
}