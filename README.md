# Pulsatio REST API Installation and Deployment

## First Steps

### Install MongoDB

#### For Linux (Debian, Ubuntu 16.04 LTS)

```apt-get install ```

#### For Mac OS (El Capitan)

```
brew update
brew install mongodb
```

For usability we will be setting mongodb database path within our Node JS REST API Server folder.

1. Navigate to the project's root folder and create a db folder.

```
mkdir db
```

2. In order to use our application with MongoDB we need to first set the mongoose module connector for our application. This is done running the following commands within the root directory of the project.

```
npm install
```

This is to install all missing modules.

```
npm install mongoose --save
```

This is to set mongoose in our module-package if not set yet

3. To run mongodb for the project we run the following command in our project's root directory.

```
mongod -dbpath db
```

4. This will create a kernel process for the mongodb management system.

5. Open a new command line windows and type the following commands:

```
npm install -g nodemon
nodemon
```

6. This command by default will install nodemon globally and the second line will run our application using the nodemon daemon letting us make modifications while the application is running.