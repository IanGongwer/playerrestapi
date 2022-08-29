# Player REST API

Created a simple REST API that utilizes NodeJS as the backend environment and Express, MySQL, Cors, DotEnv, and Body Parser in the NodeJS environment. Postman was used to test API Endpoints and their functionalities. Project is hosted on Heroku.
Endpoints:
- https://centralisrestapi.herokuapp.com/players
- https://centralisrestapi.herokuapp.com/gameinformation
- https://centralisrestapi.herokuapp.com/killfeed

REST API Routes:
- /players: Sends back a JSON response of top 10 players (Ranked by # of wins, then # of kills, then # of deaths)
Wins and Kills sort the players higher on the leaderboard, while deaths sort then lower on the leaderboard
- /gameinformation: Sends back JSON response of players left in-game, current border size, current game time, and current game state. (Default Values: 0, 0, 0:00, Lobby)
- /killfeed: Send back JSON response of player name, player UUID, killer name, and killer UUID of when a player dies. (NOTE: The killer name and UUID will be null if the player dies to the environment and not from another player)

# JSON Response
![image](https://user-images.githubusercontent.com/63007329/186742361-759f71d4-f730-4265-ad3f-2cb22ec2ec20.png)
![image](https://user-images.githubusercontent.com/63007329/187269778-253773dd-40c0-4ad7-bcce-01302c1125a3.png)
