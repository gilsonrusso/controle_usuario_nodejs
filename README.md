## PASS TO CREATE SERVER AND ADD INITIAL CONFIG

#### CREATE A NODEJS SERVER

#### [] - create server with express
#### [] install initial dependencies  ex ( express, typescript, tsnd, typeorm, pg, reflect-metadata and ... )
#### [] create initial ormconfig.json and add initial config to connect to database
#### [] create a folder named database/migrations
#### [] create index file to connect database
#### [] create the first migrations with the command below

#### [] in the database example beekip run script initialize uuid in the dabase postgres:
````
 CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
````

##### [] - Create user repository that will communication with database
 
## COMMANDS TO EXECUTE OWN MIGRATIONS

#### CREATE MIGRATION 
````
yarn typeorm migration:create -n CreateUsers
````

#### RUN MIGRATIONS
 ````
 yarn typeorm migration:run
 ````