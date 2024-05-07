import { getClient } from "./utils";

async function createTable(){
    const client = await getClient();
    const createTableQuery = `
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `;

    await client.query(createTableQuery);

    const createTodoQuery = `
        CREATE TABLE todos (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT,
            user_id INTEGER REFERENCES users(id),
            done BOOLEAN DEFAULT FALSE
        );
    `;

    await client.query(createTodoQuery);
    console.log("Table created succesfully!");
}

createTable();