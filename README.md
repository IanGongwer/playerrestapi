# Player REST API

Created a simple REST API that utilizes NodeJS as the backend environment and Express, MySQL, Cors, DotEnv, and Body Parser in the NodeJS environment. Postman was used to test API Endpoints and their functionalities. Project is hosted on Heroku at https://centralisrestapi.herokuapp.com/players.

REST API Routes:
- /players - Sends back a JSON response of top 10 players (Ranked by # of wins, then # of kills, then # of deaths)
Wins and Kills sort the players higher on the leaderboard, while deaths sort then lower on the leaderboard