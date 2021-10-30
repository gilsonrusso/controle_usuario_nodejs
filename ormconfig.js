{
    "type" = process.env.DB_TYPE,
    "host" = process.env.DB_HOST,
    "port" = process.env.DB_PORT,
    "username" = process.env.POSTGRES_USER,
    "password" = process.env.POSTGRES_PASSWORD,
    "database" = process.env.POSTGRES_DB,
    "entities" = ["entity/*.js"],
    "migrations" = ["./src/database/migrations/*.ts"],
    "cli" = {
        "migrationsDir": "./src/database/migrations"
    }
 }