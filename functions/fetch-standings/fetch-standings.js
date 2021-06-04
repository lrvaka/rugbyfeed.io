const fetch = require("node-fetch");

const handler = async (request, response) => {
  const leagueID = request.params.leagueID;
  const api_key = process.env.API_KEY;
  const standings = await fetch(
    `https://api.b365api.com/v2/league/table?token=${api_key}&league_id=${leagueID}`
  );
  console.log(standings);
  const data = await standings.json();
  console.log(data);
  response.json(data);
};

module.exports = { handler };
