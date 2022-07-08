**Video Stream Check Api**

## Getting Started
The Application can be cloned from github.com.

### Prerequisites

Begin by cloning the repository, `cd` into the cloned repository and run the following:

```
npm install
```
This command installs all the necessary dependencies


### Setup
Create a `.env` using the `.env.example` file as a guide, using your local environment variables

You can use the *postgres* in your local machine or You spin postgres with *docker* as follows:

```
chmod +x ./startdb.sh
```
```
./startdb.sh
```

Run the app in *dev* environment
```
npm run dev
```

If all goes well, you should see something similar to this on the console:
```
Application started on http://localhost:<port>
```

### API Architecture
The API is built for easy use and understanding. It includes the following:

1.	Endpoint to log streams and check if number of sessions has been exceeded


## API END POINTS AND FUNCTIONALITY

| EndPoint | Functionality |
| --- | --- |
| POST `/api/v1/stream` | return *success* if session are not exceeded |

Now you can test the endpoints with a client e.g POSTMAN

List of commands available at the moment include:

**POST**

Adds an entry into the database

\
**/api/v1/stream** - adds a stream to the database. The stream information is sent within the *Body* of the request and it returns an of object that contains the *HTTP status code* and *result*.

Sample response on *request*
```
{
    "userId": 1,
    "videoId": 3,
    "duration": "{{timeStamp}}"
}
```

Sample response on *success*
```
{
    "success": true,
    "statusCode": 201,
    "message": "video Started Successfully",
    "body": {
        "status": "ACTIVE",
        "id": 2,
        "userId": 1,
        "videoId": 3,
        "duration": 1657272237582,
        "updatedAt": "2022-07-08T09:23:57.715Z",
        "createdAt": "2022-07-08T09:23:57.715Z"
    }
}
```
Each input field is validated and would return a *field specific* error message if empty or of wrong datatype.
Sample response on *error1*
```
{
    "success": false,
    "errors": {
        "message": "userId must be a number",
        "status": 400
    }
}
```
Sample response on *error2*
```
{
    "success": false,
    "errors": {
        "message": "videoId is required",
        "status": 400
    }
}
```
## Integration tests

To test the endpoints, create a test database and run the following:
```
npm run test
```


## Dockerization
To run the Application on docker. Input the following in your terminal
```
chmod +x ./start.sh
```
```
./start.sh
```

If all goes well, you should see something similar to this on the console:
```
Application started on http://localhost:4000
```

## Design Process
At every point user initiates a new stream, the stream is logged to the service.
The service queries it's database for a *count* of all *ACTIVE* streams of the user for which the *duration* of the video
has not elapsed.
If the *count + incoming stream > 3* the system returns an *error*
else the incoming stream is logged to the service database

## TODO
Service should update streams for which the *duration* has elapsed to *INACTIVE* and delete the record afterwards

## Built With

* [Node.js](https://nodejs.org/) - Javascript runtime
* [Express](https://expressjs.com/) - Web application framework
* [Jest](https://jestjs.io/) and Supertest - testing framework
* [Sequelize](https://sequelize.org/) - Database
* [SQLITE](https://www.sqlite.org/index.html) - Test Database

## Authors

* **Ulor Pascal** - [PascalUlor](https://github.com/PascalUlor)
