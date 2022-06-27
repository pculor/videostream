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

## Built With

* [Node.js](https://nodejs.org/) - Javascript runtime
* [Express](https://expressjs.com/) - Web application framework
* [Jest](https://jestjs.io/) and Supertest - testing framework
* [Sequelize](https://sequelize.org/) - Database
* [SQLITE](https://www.sqlite.org/index.html) - Test Database

## Authors

* **Ulor Pascal** - [PascalUlor](https://github.com/PascalUlor)
