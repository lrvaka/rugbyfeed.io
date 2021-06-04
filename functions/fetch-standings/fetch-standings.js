const fetch = require("node-fetch");
require("dotenv").config();

const handler = async (request, response) => {
  const leagueID = request;
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
