# Player REST Api

Created a simple REST API that utilizes NodeJS as the backend environment and Express, MySQL, and Body Parser in the NodeJS environment. Postman was used to test API Endpoints and their functionalities.

Requests made to the Express server need to be through the request body, not request parameters.

Example of /players POST Utilization :
> Adding entry with a name of ian and id of 0
```
{
    "name": "ian",
    "id": "0"
}
```

Example of /players PUT Utilization:
> Changing name from ian to haylie
```
{
    "name": "haylie",
    "id": "0"
}
```

Example of /player DELETE Utilization:
> Deleting entry with an id of 0
```
{
    "id": "0"
}
```

REST API Routes:
- /createdb - Creates Database
- /createtable - Creates table with appropriate columns
- /players
    - GET - Sends all players and their respective ids
    - POST - Inserts a player and id into database
    - PUT - Replaces name for a player using their id
    - DELETE - Deletes a player from database using their id