import { createConnection } from "typeorm";

// this connection will search the ormconfig file
// this connection will search the ormconfig file

try {
  console.log('Connecting to database');
    createConnection();
} catch (error) {
  console.log('Erro on try connect to dabase', error);
}
