# IPC Graph
Chart that shows ipc data from a fake api. Includes login screen.

## Pre-requisites
This app uses the api server:
>https://github.com/csarg26/jwt_server 

There is an instance of this server on heroku:
https://jwt-fake-server.herokuapp.com/api/

OR
To work locally install it following the repo instructions and configure url on
>src\constants.ts

## Install
Clone the repo and run 

```
npm install
```

## Start
Run the command

```
npm start
```

## Configure
Configure the api url and port on the file 
>src\constants.ts

## Usage
Login with the users on the backend project file:
>users.json

Default user and password are:
> test@gmail.com
> 123456


## Test
To run the test suites run the command:
 
```
npm test
```

