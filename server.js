//The first two lines require() (import) the express module and create an Express application
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const router = express.Router();
app.use(cors());

router.get("/standings/:leagueID", async (request, response) => {
  const leagueID = request.params.leagueID;
  const api_key = process.env.API_KEY;
  const standings = await fetch(
    `https://api.b365api.com/v2/league/table?token=${api_key}&league_id=${leagueID}`
  );
  console.log(standings);
  const data = await standings.json();
  console.log(data);
  response.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
