const fetch = require("node-fetch");
require("dotenv").config();

const handler = async function (event, context) {
  const api_key = process.env.API_KEY;
  const leagueID = event.queryStringParameters.leagueID;

  try {
    const response = await fetch(
      `https://api.b365api.com/v2/league/table?token=${api_key}&league_id=${leagueID}`,
      {
        headers: { Accept: "application/json" },
      }
    );
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }
    
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    // output to netlify function log
    console.log(error);
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    };
  }
};

module.exports = { handler };
