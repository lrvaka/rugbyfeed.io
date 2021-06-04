const fetch = require("node-fetch");

const API_ENDPOINT = "https://icanhazdadjoke.com/";

exports.handler = async (event, context) => {
  const api_key = process.env.API_KEY;
  const leagueID = event.queryStringParameters.leagueID;
  return fetch(
    `https://api.b365api.com/v2/league/table?token=${api_key}&league_id=${leagueID}`,
    { headers: { Accept: "application/json" } }
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};

// const fetch = require("node-fetch");
// require("dotenv").config();

// exports.handler = async (event, context) => {
//   const api_key = process.env.API_KEY;
//   const leagueID = event.queryStringParameters.leagueID;
//   const response = await fetch(
//     `https://api.b365api.com/v2/league/table?token=${api_key}&league_id=${leagueID}`
//   );
//   console.log(response);
//   const data = await response.json();
//   console.log(data);
//   return data;
// };
