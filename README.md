# Player REST Api

Created a simple rest api that utilizes NodeJS as the backend environment and Express, MySQL, and Body Parser in the NodeJS environment. Postman was used to test API Endpoints and their functionalities.

Requests made to the Express server need to through the request body, not request parameters.

/player POST Utilization:

```
{
    "name": "ian",
    "id": "0"
}
```

REST API Routes:
/createdb - Creates Database
/createtable - Creates table with appropriate columns
/players
- GET - Sends all players and their respective ids
- POST - Inserts a player and id into database
- PUT - Replaces name for a player using their id
- DELETE - Deletes a player from database using their id