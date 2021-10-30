import { createConnection } from "typeorm";

// this connection will search the ormconfig file 
createConnection();


//  COMMANDS TO EXECUTE OWN MIGRATIONS
/**
 * CREATE MIGRATION: yanr typeorm migration:create -n CreateUsers
 */